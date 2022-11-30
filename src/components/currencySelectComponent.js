import { CommonComponent } from './commonComponent'
import { StoreExchange } from '../store/storeExchange'

export class CurrencySelectComponent extends CommonComponent {
  #store

  constructor(store) {
    super('.result-currency')
    if (store instanceof StoreExchange) {
      this.#store = store
    }
  }

  renderOptions() {
    this.#store.getState().coins.forEach(element => {
      const o = document.createElement('option')
      o.value = element.symbol
      o.innerHTML = element.name
      document.querySelector('.result-currency').appendChild(o)
    })
  }
}
