
import * as rp from 'request-promise'

import { endpoint } from './variablesAPI'

export default class OptionsAPI {

    /**
     * Finds the price of the inputted stock name
     * @param stockName name of desired stock
     */
    public priceOptions(stockName: string): rp.Options {
        return {
            method: 'GET',
            uri: `${endpoint}/stock/${stockName}/price`,
        }
    }

    public stockInfo(stockName: string): rp.Options {
        return {
            json: true,
            method: 'GET',
            uri: `${endpoint}/stock/${stockName}/company`,
        }
    }

    // add more api calls below

}
