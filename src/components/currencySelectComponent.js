import { Store } from '../store'
import { CurrencyService } from '../services'
import { CommonCreate } from './commonCreate'

export class CurrencySelectComponent extends CommonCreate {
  #store

  #service

  constructor(store, service) {
    super()
    if (store instanceof Store) {
      this.#store = store
    }
    if (service instanceof CurrencyService) {
      this.#service = service
    }
  }

  renderOptions() {
    this.#service.getCurrencies().then(() => {
      this.#store.getState().coins.forEach(coin => {
        this.createOption(coin.name, coin.symbol)
        this.renderCurrentElement('.result-currency')
      })
    })
  }

  renderElement() {
    this.createH1('Operations')
    this.renderCurrentElement('.top')

    this.createSelect('changeable-currency')
    this.renderCurrentElement('.currency')

    this.createSelect('result-currency')
    this.renderCurrentElement('.currency')

    this.createOption('Dollar')
    this.renderCurrentElement('.changeable-currency')

    this.createInput('initial-value', 'number', 0)
    this.renderCurrentElement('.input-exchange-value')

    this.createInput('result-value', 'number', 0)
    this.renderCurrentElement('.input-exchange-value')

    this.createButton('exchange', 'Exchange')
    this.renderCurrentElement('.input-exchange-value')
  }
}
