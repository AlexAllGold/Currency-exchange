import { Store } from '@/store';
import { HttpClient } from '@/utils';
import { environments } from '@/environments';

export class CoinsService {
  #store;

  #http;

  #url = `${environments.API_URL}/coins?skip=0&limit=5&currency=`;

  constructor(store, http) {
    if (store instanceof Store) {
      this.#store = store;
    }
    if (http instanceof HttpClient) {
      this.#http = http;
    }
  }

  getCoins() {
    const { selectedCurrency } = this.#store.getState();
    this.#store.notifyObserve();
    return this.#http
      .get(this.#url + selectedCurrency)
      .then(({ coins }) => this.#store.setState({ coins }))
      .catch(err => console.error(err));
  }
}
