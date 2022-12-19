import { CommonComponent } from '@/common';
import { Store } from '@/store';
import { CoinsService } from '@/services';
import { Events, TagNames } from '@/utils';

export class CurrenciesSelect extends CommonComponent {
  #store;

  #service;

  constructor(store, service) {
    super(TagNames.SELECT);
    if (store instanceof Store) {
      this.#store = store;
    }
    if (service instanceof CoinsService) {
      this.#service = service;
    }
  }

  renderCurrenciesSelect() {
    this.addClassName('changeable-Selects');
    this.#renderOptions();
    this.#addListener();
    return this.getComponent();
  }

  #renderOptions() {
    this.#store.getState().currencies.forEach(item => {
      this.addOptions(item);
    });
    return this;
  }

  #addListener() {
    this.getComponent().addEventListener(Events.CHANGE, event => {
      this.#store.setState({ selectedCurrency: event.target.value });
      this.#service.getCoins();
    });
    return this;
  }
}
