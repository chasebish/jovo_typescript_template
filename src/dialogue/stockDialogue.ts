
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
     * @param jovo handles requests & responses
     * @param stockName name of the stock
     */
    stockPrice(jovo: Jovo, stockName: InputSlot): void {

        if (!stockName.alexaSkill) {
            outputSpeech = 'Not supported by google home yet'
            jovo.tell(outputSpeech)
            return
        }

        if (!stockName.alexaSkill.resolutions) {
            error.default(jovo, stockName)
            return
        }

        if (stockName.alexaSkill.resolutions.resolutionsPerAuthority[0].status.code !== 'ER_SUCCESS_MATCH') {
            outputSpeech = 'Sorry, I don\'t currently support that stock. ' +
                'Ask for help if you would like me to list all supported stocks.'
            repromptSpeech = 'Ask for help if you would like me to list the supported stocks.'

            jovo.ask(outputSpeech, repromptSpeech)
            return
        }

        let price: number
        const api = new DialogueAPI(jovo)

        api.getPrice(stockName.key).then((response) => {
            price = response

            outputSpeech = `The current price of ${stockName.key.toUpperCase()} is $${price}. ` +
                'Ask for info to get more info about this company or request a new company.'
            repromptSpeech = 'Ask for info or select a new company.'

            cardTitle = `${stockName.key.toUpperCase()} stock`
            cardBody = `Current price: $${price}`

            // saves the stock name as a session attribute
            jovo.setSessionAttribute('stock', stockName.key)

            // changes the state
            jovo.followUpState('StockState')

            // responds with a card
            ask(jovo, outputSpeech, repromptSpeech, cardTitle, cardBody)
            return
        })
            .catch((err) => {
                error.default(jovo, err)
                return
            })
    },

    stockInfo(jovo: Jovo): void {

        const stockName: string = jovo.getSessionAttribute('stock')

        if (!stockName) {
            error.default(jovo, 'couldn\'t retrieve session attribute')
            return
        }

        let info: StockInfo
        const api = new DialogueAPI(jovo)

        api.getInfo(stockName).then((response) => {
            info = response

            outputSpeech = `${info.description} There is more information about ${stockName} in the Alexa jovo. ` +
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

            ask(jovo, outputSpeech, repromptSpeech, cardTitle, cardBody)
            return
        })
            .catch((err) => {
                error.default(jovo, err)
                return
            })

    },

    help(jovo: Jovo): void {
        const stockName: string = jovo.getSessionAttribute('stock')

        outputSpeech = `Respond with "info" to learn more about ${stockName} or choose a new company.`
        repromptSpeech = 'Ask for info or a new company.'

        jovo.ask(outputSpeech, repromptSpeech)

    },

    unhandled(jovo: Jovo): void {
        outputSpeech = 'Sorry, I can\'t handle that request right now.  Ask for help if you are stuck.'
        repromptSpeech = 'Ask for help if you need help.'

        jovo.ask(outputSpeech, repromptSpeech)
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
