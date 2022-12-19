import { CommonComponent } from '@/common';
import { Store } from '@/store';
import { CoinsService } from '@/services';
import { Events, TagNames } from '@/utils';

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
    this.#addListener();
    this.#renderOptions();
    return this.getComponent();
  }

  #renderOptions() {
    this.isDisabled(true);
    this.#service.getCoins().then(() => {
      this.#store.getState().coins.forEach(coin => {
        this.addOptions(coin);
      });
      this.isDisabled(false);
    });
    return this;
  }

  #addListener() {
    this.getComponent().addEventListener(Events.CHANGE, event => {
      this.#store.setState({ selectedCoin: event.target.value });
    });
    return this;
  }
}
