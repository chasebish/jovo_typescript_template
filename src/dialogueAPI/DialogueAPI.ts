
import * as rp from 'request-promise'

import { Jovo } from '../types/Jovo.types'
import OptionsAPI from './OptionsAPI'

export default class DialogueAPI {

    /** Variables for API call */
    private Options: OptionsAPI

    /** Handles all requests and responses */
    private app: Jovo

    /**
     * Constructor for DialogueAPI
     * @param app handles requests & responses
     */
    constructor(app: Jovo) {
        this.app = app
        this.Options = new OptionsAPI()
    }

    /**
     * Returns the price of the stock as a number
     */
    public getPrice = (stockName: string): rp.RequestPromise => {
        return rp(this.Options.priceOptions(stockName))
    }

    /**
     * Gets info about the company as a JSON
     */
    public getInfo = (stockName: string): rp.RequestPromise => {
        return rp(this.Options.stockInfo(stockName))
    }

    // add more API calls below

}
