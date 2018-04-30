
import { stateless, stockDialogue } from '../dialogue'
import { InputSlot } from '../types'

export const handlerConfig = {

    // Default intents

    LAUNCH(): void {
        stateless.prompt(this)
    },
    HelpIntent(): void {
        stateless.help(this)
    },
    Unhandled(): void {
        stateless.unhandled(this)
    },
    END(): void {
        stateless.end(this)
    },

    // Custom intents

    PriceIntent(stock: InputSlot): void {
        // Goes to StockState on success
        stockDialogue.stockPrice(this, stock)
    },

    StockState: {

        // Default intents

        HelpIntent(): void {
            stockDialogue.help(this)
        },
        Unhandled(): void {
            stockDialogue.unhandled(this)
        },
        END(): void {
            this.toStatelessIntent('END')
        },

        // Custom intents

        InfoIntent(): void {
            stockDialogue.stockInfo(this)
        },

        PriceIntent(stock: InputSlot): void {
            this.toStatelessIntent('PriceIntent', stock)
        },
    },
}
