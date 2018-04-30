
import DialogueAPI from '../dialogueAPI/DialogueAPI'
import { ask, tell } from '../services/cards'
import { InputSlot, Jovo, SpeechBuilder } from '../types'
import { error } from './error'

let outputSpeech: string
let repromptSpeech: string

let cardTitle: string
let cardBody: string

export const stockDialogue = {

    /**
     * Fetches stock price and sets state to StockState on success
     * @param app handles requests & responses
     * @param stockName name of the stock
     */
    stockPrice(app: Jovo, stockName: InputSlot): void {

        if (!stockName.alexaSkill) {
            outputSpeech = 'Not supported by google home yet'
            app.tell(outputSpeech)
            return
        }

        if (!stockName.alexaSkill.resolutions) {
            error.default(app, stockName)
            return
        }

        if (stockName.alexaSkill.resolutions.resolutionsPerAuthority[0].status.code !== 'ER_SUCCESS_MATCH') {
            outputSpeech = 'Sorry, I don\'t currently support that stock. ' +
                'Ask for help if you would like me to list all supported stocks.'
            repromptSpeech = 'Ask for help if you would like me to list the supported stocks.'

            app.ask(outputSpeech, repromptSpeech)
            return
        }

        let price: number
        const api = new DialogueAPI(app)

        api.getPrice(stockName.key).then((response) => {
            price = response

            outputSpeech = `The current price of ${stockName.key.toUpperCase()} is $${price}. ` +
                'Ask for info to get more info about this company or request a new company.'
            repromptSpeech = 'Ask for info or select a new company.'

            cardTitle = `${stockName.name} stock`
            cardBody = `Current price: $${price}`

            // saves the stock name as a session attribute
            app.setSessionAttribute('stock', stockName.key)

            // changes the state
            app.followUpState('StockState')

            // responds with a card
            ask(app, outputSpeech, repromptSpeech, cardTitle, cardBody)
            return
        })
            .catch((err) => {
                error.default(app, err)
                return
            })
    },

    stockInfo(app: Jovo): void {

        const stockName: string = app.getSessionAttribute('stock')

        if (!stockName) {
            error.default(app, 'couldn\'t retrieve session attribute')
            return
        }

        let info: StockInfo
        const api = new DialogueAPI(app)

        api.getPrice(stockName).then((response) => {
            info = response

            outputSpeech = `${info.description} There is more information about ${stockName} in the Alexa App.` +
                'Please select a new company to get its price.'
            repromptSpeech = 'Please select a new company.'

            cardTitle = `Information about ${stockName}`
            cardBody =
                `Symbol: ${info.symbol}\n` +
                `Company Name: ${info.companyName}\n` +
                `Exchange: ${info.exchange}\n` +
                `Industry: ${info.industry}\n` +
                `Website: ${info.website}\n` +
                `CEO: ${info.CEO}\n` +
                `Sector: ${info.sector}\n`

            ask(app, outputSpeech, repromptSpeech, cardTitle, cardBody)
            return
        })
            .catch((err) => {
                error.default(app, err)
                return
            })

    },

    help(app: Jovo): void {
        const stockName: string = app.getSessionAttribute('stock')

        outputSpeech = `Respond with "info" to learn more about ${stockName} or choose a new company.`
        repromptSpeech = 'Ask for info or a new company.'

        app.ask(outputSpeech, repromptSpeech)

    },

    unhandled(app: Jovo): void {
        outputSpeech = 'Sorry, I can\'t handle that request right now.  Ask for help if you are stuck.'
        repromptSpeech = 'Ask for help if you need help.'

        app.ask(outputSpeech, repromptSpeech)
    },

    // Add more dialogue below

}

/**
 * What the API returns when requesting company information
 */
interface StockInfo {
    symbol: string,
    companyName: string,
    exchange: string,
    industry: string,
    website: string,
    description: string,
    CEO: string,
    issueType: string,
    sector: string
}
