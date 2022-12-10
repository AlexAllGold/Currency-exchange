import { Store } from '../store';
import { RequestBuilder } from '../utils/requestBuilder';

export class CurrencyService {
  #store;

  #http;

  #url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR';

  constructor(store, http) {
    if (store instanceof Store) {
      this.#store = store;
    }
    if (http instanceof RequestBuilder) {
      this.#http = http;
    }
  }

  getCurrencies() {
    return this.#http
      .get(this.#url)
      .then(({ coins }) => this.#store.setState({ coins }))
      .catch(err => console.error(err));
  }
}
