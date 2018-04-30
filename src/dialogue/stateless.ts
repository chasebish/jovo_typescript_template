
import { Jovo } from '../types/Jovo.types'

let outputSpeech: string
let repromptSpeech: string

export const stateless = {

    prompt(app: Jovo): void {
        outputSpeech = 'Welcome to stock market data.  Pick a company to get its price!'
        repromptSpeech = 'Select a stock to get a price'

        app.ask(outputSpeech, repromptSpeech)
    },

    help(app: Jovo): void {
        outputSpeech = 'This app gets stock prices and company info. ' +
            'It currently supports Apple, Alphabet, Microsoft, and Oracle.'
        repromptSpeech = 'Select a stock to get the price.'

        app.ask(outputSpeech, repromptSpeech)
    },

    unhandled(app: Jovo): void {
        outputSpeech = 'Sorry, I can\'t handle that request right now.'
        repromptSpeech = outputSpeech

        app.ask(outputSpeech, repromptSpeech)
    },

    end(app: Jovo): void {
        outputSpeech = 'Thank you for using stock market data!'

        app.tell(outputSpeech)
    },

}
