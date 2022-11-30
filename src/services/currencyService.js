import { StoreExchange } from '../store/storeExchange'
import { RequestBuilder } from '../util/requestBuilder'
import { CurrencySelectComponent } from '../components/currencySelectComponent'

export class CurrencyService {
  #store

  #component

  #url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR'

  constructor(store, component) {
    if (store instanceof StoreExchange) {
      this.#store = store
    }
    if (component instanceof CurrencySelectComponent) {
      this.#component = component
    }
  }

  getCurrencies() {
    const builder = new RequestBuilder()
    return builder
      .sendRequest('GET', this.#url)
      .then(({ coins }) => this.#store.setState({ coins }))
      .catch(err => console.error(err))
  }
}
