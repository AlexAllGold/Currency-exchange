import { Store } from '../store'
import { CurrencyService } from '../services'
import { CommonComponent } from './commonComponent'

export class ResultComponent extends CommonComponent {
  #store

  #service

  constructor(store, service) {
    super('.result-value')
    if (store instanceof Store) {
      this.#store = store
    }
    if (service instanceof CurrencyService) {
      this.#service = service
    }
  }

  exchange({ target }) {
    const initialValue = Number(document.querySelector('.initial-value').value)
    const currentCurrency = document.querySelector('.result-currency').value
    const { price } = this.#store.getState().coins.find(item => item.symbol === currentCurrency)
    this.#store.setState({ result: parseInt(initialValue * price * 100, 10) / 100 })
    if (target.classList.contains('exchange')) {
      this.#render()
    }
  }

  #render() {
    this.getComponent().value = this.#store.getState().result
  }
}
