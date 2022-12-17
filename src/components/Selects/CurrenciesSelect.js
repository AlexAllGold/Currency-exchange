import { CommonComponent } from '@/common';
import { Store } from '@/store';
import { CoinsService } from '@/services';
import { TagNames } from '@/utils';

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
    this.renderElement(TagNames.CURRENCY_ELEMENT, this.getComponent());
    this.#renderOptions();
    this.#addListener();
  }

  #renderOptions() {
    this.#store.getState().currencies.forEach(item => {
      this.addOptions(item);
    });
  }

  #addListener() {
    this.getComponent().addEventListener('change', event => {
      this.#store.setState({ selectedCurrency: event.target.value });
      this.#service.getCoins();
    });
  }
}
