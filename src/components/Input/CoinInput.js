import { Input } from '@/common';
import { Store } from '@/store';

export class CoinInput extends Input {
  #store;

  constructor(store) {
    super(store);
    if (store instanceof Store) {
      this.#store = store;
    }
  }

  update() {
    this.addValue(this.#store.getState().result);
  }
}
