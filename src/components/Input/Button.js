import { CommonComponent } from '@/common';
import { Store } from '@/store';
import { TagNames } from '@/utils';

export class Button extends CommonComponent {
  #store;

  constructor(store) {
    super(TagNames.BUTTON);
    if (store instanceof Store) {
      this.#store = store;
    }
  }

  renderButton() {
    this.addClassName('exchange');
    this.addInnerHTML('Exchange');
    this.renderElement('.input-exchange-value', this.getComponent());
    this.getComponent().addEventListener('click', this.#exchange.bind(this));
  }

  #exchange() {
    const { initialValue } = this.#store.getState();
    const price = this.#getPrice();
    this.#store.setState({ result: this.#rounding(initialValue, price) });
  }

  #getPrice() {
    const { coins, selectedCoin } = this.#store.getState();
    const coin = coins.find(item => item.symbol === selectedCoin);
    return coin?.price;
  }

  #rounding(initialValue, price) {
    return parseInt(initialValue * price * 100, 10) / 100;
  }
}
