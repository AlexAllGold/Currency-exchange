import { CommonComponent } from '@/common';
import { Store } from '@/store';
import { CoinsService } from '@/services';
import { TagNames } from '@/utils';

export class CoinsSelect extends CommonComponent {
  #service;

  #store;

  constructor(store, service) {
    super(TagNames.SELECT);
    if (store instanceof Store) {
      this.#store = store;
    }
    if (service instanceof CoinsService) {
      this.#service = service;
    }
  }

  renderCoinsSelect() {
    this.addClassName('result-Selects');
    this.renderElement(TagNames.CURRENCY_ELEMENT, this.getComponent());
    this.isDisabled();
    this.#renderOptions();
    this.#addListener();
  }

  #renderOptions() {
    this.#service.getCoins().then(() => {
      this.#store.getState().coins.forEach(coin => {
        this.addOptions(coin);
      });
      this.isDisabled();
    });
  }

  #addListener() {
    this.getComponent().addEventListener('change', event => {
      this.#store.setState({ selectedCoin: event.target.value });
    });
  }
}
