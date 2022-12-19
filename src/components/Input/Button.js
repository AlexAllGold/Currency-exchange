import { CommonComponent } from '@/components/common';
import { Store } from '@/store';
import { TagNames, Events } from '@/utils';

export class Button extends CommonComponent {
  #store;

  constructor(store) {
    super(TagNames.BUTTON);
    if (store instanceof Store) {
      this.#store = store;
    }
  }

  renderButton() {
    this.addClassName('exchange').addInnerHTML('Exchange');
    this.getComponent().addEventListener(Events.CLICK, this.#exchange.bind(this));
    return this.getComponent();
  }

  #exchange(event) {
    event.preventDefault();
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
