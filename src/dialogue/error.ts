
import { Jovo } from '../types/Jovo.types'

let outputSpeech: string

export const error = {

    /**
     * Default error handler
     * @param jovo handles requests & responses
     * @param err
     */
    default(jovo: Jovo, err: any): void {
        outputSpeech = 'Sorry, there was an error with the app.'
        console.error(err)
        jovo.tell(outputSpeech)
    },

}
