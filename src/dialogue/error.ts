
import { Jovo } from '../types/Jovo.types'

let outputSpeech: string

export const error = {

    /**
     * Default error handler
     * @param app handles requests & responses
     * @param err
     */
    default(app: Jovo, err: any): void {
        outputSpeech = 'Sorry, there was an error with the app.'
        console.error(err)
        app.tell(outputSpeech)
    },

}
