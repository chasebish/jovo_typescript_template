
import { SpeechBuilder } from '../types/Jovo.types'

const cardUrl: string = 'https://i.imgur.com/yznJhMU.jpg'

/**
 * Creates a card that elicits a response from the user
 * @param app
 * @param outputSpeech initial speech
 * @param repromptSpeech reprompts the user
 * @param title title for the card
 * @param body body for the card
 */
export function ask(
    app: any, outputSpeech: string | SpeechBuilder, repromptSpeech: string | SpeechBuilder,
    title: string, body: string) {

        app.showImageCard(title, body, {
            largeImageUrl: cardUrl,
            smallImageUrl: cardUrl,
        })
        .ask(outputSpeech, repromptSpeech)
}

/**
 * Creates a card that will end the session
 * @param app
 * @param outputSpeech initial speech
 * @param title title for the card
 * @param body body for the card
 */
export function tell(app: any, outputSpeech: string | SpeechBuilder, title: string, body: string) {

    app.showImageCard(title, body, {
        largeImageUrl: cardUrl,
        smallImageUrl: cardUrl,
    })
    .tell(outputSpeech)
}
