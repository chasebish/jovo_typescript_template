
import { Jovo } from '../types/Jovo.types'

let outputSpeech: string
let repromptSpeech: string

export const stateless = {

    prompt(app: Jovo): void {
        outputSpeech = 'Welcome to the typescript demo app. This demo app gets stock prices. ' +
            'Select a stock to get a price.'
        repromptSpeech = 'Select a stock to get a price'

        app.ask(outputSpeech, repromptSpeech)
    },

    help(app: Jovo): void {
        outputSpeech = 'This demo app gets stock prices. It currently supports Apple, Alphabet, and Oracle.'
        repromptSpeech = 'Select a stock to get the price.'

        app.ask(outputSpeech, repromptSpeech)
    },

    unhandled(app: Jovo): void {
        outputSpeech = 'Sorry, I can\'t handle that request right now.'
        repromptSpeech = outputSpeech

        app.ask(outputSpeech, repromptSpeech)
    },

    end(app: Jovo): void {
        outputSpeech = 'Thank you for trying out this demo app!'

        app.tell(outputSpeech)
    },

}
