
export interface Jovo {
    /**
     * Sets session attribute
     * @param key
     * @param value
     */
    addSessionAttribute(key: string, value: any): Jovo

    /**
     * Returns AlexaSkill object
     */
    alexaSkill(): {AlexaSkill}

    /**
     * Analytics instance
     */
    analytics(): {Analytics}

    /**
     * Says speech and waits for answer from user, reprompt when user input fails, keeps session open
     * @param speech
     * @param repromptSpeech
     */
    ask(speech: string | SpeechBuilder, repromptSpeech: string | string[]| SpeechBuilder | SpeechBuilder[]): void

    /**
     * Returns the default db (if no name) Returns the db instance by given name
     * @param name
     */
    db(name: string): {}

    /**
     * Fires respond event and ends session
     */
    endSession(): void

    /**
     * Sets 'state' session attributes
     * @param state null removes state
     */
    followUpState(state: string): Jovo

    /**
     * Returns user's access token
     */
    getAccessToken(): string

    /**
     * Returns End of reason.  Use in 'END'
     * ** Not available in google actions **
     */
    getEndReason(): string

    /**
     * Returns path to function inside the handler
     */
    getHandlerPath(): string

    /**
     * Get input object by name
     * @param name
     */
    getInput(name: string): {}

    /**
     * Returns inputs
     * { input1 : value1, input2 : value2 }
     */
    getInputs(): {}

    /**
     * Returns intent name after custom and standard intent mapping
     */
    getIntentName(): string

    /**
     * Returns locale of platform
     */
    getLocale(): string

    /**
     * Returns platform object
     */
    getPlatform(): {AlexaSkill}

    /**
     * Returns ID of touched/selected item
     */
    getSelectedElementID(): string

    /**
     * Returns session attribute value
     * @param name
     */
    getSessionAttribute(name: string): any

    /**
     * Returns session attributes
     * { att1 : val1, att2 : val2 }
     */
    getSessionAttributes(): {}

    /**
     * Returns state value stored in the request session
     */
    getState(): string

    /**
     * Returns timestamp of a user's request
     */
    getTimestamp(): string

    /**
     * Returns type of platform - "AlexaSkill" or "GoogleAction"
     */
    getType(): string

    /**
     * Returns UserID
     */
    getUserId(): string

    /**
     * Returns GoogleAction object
     */
    googleAction(): {GoogleAction}

    /**
     * Returns audio capability of request device
     */
    hasAudioInterface(): boolean

    /**
     * Returns screen capability of request device
     */
    hasScreenInterface(): boolean

    /**
     * Returns screen capability of request device
     */
    hasVideoInterface(): boolean

    /**
     * Type of platform is Alexa Skill
     */
    isAlexaSkill(): boolean

    /**
     * Type of request is audio player request
     */
    isAudioPlayerRequest(): boolean

    /**
     * Type of request is 'Element Selected" on visual interfaces
     */
    isElementSelectedRequest(): boolean

    /**
     * Type of request is end request
     */
    isEndRequest(): boolean

    /**
     * Type of platform is Google Action
     */
    isGoogleAction(): boolean

    /**
     * Returns boolean if request is part of new session
     */
    isNewSession(): boolean

    /**
     * Aborts response if request's skillID doesn't match configured skillID
     */
    isRequestAllowed(): boolean

    /**
     * Removes state from session
     */
    removeState(): Jovo

    /**
     * Returns request instance
     */
    request(): {}

    /**
     * Sets session attribute
     * @param name
     * @param value emit value when removing attribute
     */
    setSessionAttribute(name: string, value?: any): Jovo

    /**
     * Sets session attributes
     * @param attributes ex: { att1 : val1, att2 : val2 }
     */
    setSessionAttributes(attributes: {}): Jovo

    /**
     * Shows account linking card to response
     */
    showAccountLinkingCard(): Jovo

    /**
     * Shows image card to response
     * @param title
     * @param content
     * @param imageURL secure url
     */
    showImageCard(title: string, content: string, imageURL: {}): Jovo

    /**
     * Shows simple card to response
     * @param title
     * @param content
     */
    showSimpleCard(title: string, content: string): Jovo

    /**
     * Returns Speechbuilder object initialized for the platform
     */
    speechBuilder(): SpeechBuilder

    /**
     * Translates a path with values provided
     * @param path to the resource to translate
     * @param values to replace inside the path
     */
    t(path: string, values: any): string

    /**
     * Responds with the given text and ends session
     * @param speech Plaintext or SSML
     */
    tell(speech: string | SpeechBuilder): void

    /**
     * Jumps to global intent
     * @param intent intent name
     */
    toGlobalIntent(intent: string, args?: any): void

    /**
     * Jumps to an intent
     * @param intent intent name
     */
    toIntent(intent: string, args?: any): void

    /**
     * Jumps to state intent
     * @param state state name
     * @param intent intent name
     */
    toStateIntent(state: string, intent: string, args?: any): void

    /**
     * Jumps from the inside of a state to a global intent
     * @param intent intent name
     */
    toStatelessIntent(intent: string, args?: any): void

    /**
     * Returns user object
     */
    user(): {}

}

export interface SpeechBuilder {

    /**
     * Add plain text for text-to-speech
     * @param text
     */
    addText(text: string): SpeechBuilder

    /**
     * Add link to audio file and alternative text for Google Assistant
     * @param url
     * @param alternativeText Only on Google Assistant
     */
    addAudio(url: string, alternativeText: string): SpeechBuilder

    /**
     * Add a break to the output
     * @param time ex: '3s' or '300ms'
     */
    addBreak(time: string): SpeechBuilder

    /**
     * Add a text within a sentence tag
     * @param text
     */
    addSentence(text: string): SpeechBuilder

    /**
     * Reads the number as cardinal
     * @param text
     */
    addSayAsCardinal(text: string): SpeechBuilder

    /**
     * Reads a number as ordinal
     * @param text
     */
    addSayAsOrdinal(text: string): SpeechBuilder

    /**
     * Reads all characters of provided string
     * @param text
     */
    addSayAsCharacters(text: string): SpeechBuilder

    /**
     * Returns the content of the speechBuilder object as a string
     */
    toString(): SpeechBuilder
}
