
import { Jovo } from '../types/Jovo.types'

let outputSpeech: string
let repromptSpeech: string

export const stateless = {

    prompt(jovo: Jovo): void {
        outputSpeech = 'Welcome to stock market data.  Pick a company to get its price!'
        repromptSpeech = 'Select a stock to get a price'

        jovo.ask(outputSpeech, repromptSpeech)
    },

    help(jovo: Jovo): void {
        outputSpeech = 'This app gets stock prices and company info. ' +
            'It currently supports Apple, Alphabet, Microsoft, and Oracle.'
        repromptSpeech = 'Select a stock to get the price.'

        jovo.ask(outputSpeech, repromptSpeech)
    },

    unhandled(jovo: Jovo): void {
        outputSpeech = 'Sorry, I can\'t handle that request right now.'
        repromptSpeech = outputSpeech

        jovo.ask(outputSpeech, repromptSpeech)
    },

    end(jovo: Jovo): void {
        outputSpeech = 'Thank you for using stock market data!'

        jovo.tell(outputSpeech)
    },

}
