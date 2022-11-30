import { StoreExchange } from '../store/storeExchange'
import { CurrencyService } from '../services/currencyService'
import { CommonComponent } from './commonComponent'

export class ResultComponent extends CommonComponent {
  #store

  #service

  constructor(store, service) {
    super('.result-value')
    if (store instanceof StoreExchange) {
      this.#store = store
    }
    if (service instanceof CurrencyService) {
      this.#service = service
    }
  }

  #render() {
    this.getComponent().value = this.#store.getState().result
  }

  exchange({ target }) {
    const initialValue = Number(document.querySelector('.initial-value').value)
    const currentCurrency = document.querySelector('.result-currency').value
    // if (undefined === obj.price)
    const { price } = this.#store.getState().coins.find(item => item.symbol === currentCurrency)
    this.#store.setState({ result: parseInt(initialValue * price * 100, 10) / 100 })
    if (target.classList.contains('exchange')) {
      this.#render()
    }
  }
}
