import { CommonComponent } from '@/common';
import { Store } from '@/store';
import { CoinsService } from '@/services';
import { TagNames } from '@/utils';
import { CurrenciesSelect } from './CurrenciesSelect';
import { CoinsSelect } from './CoinsSelect';

export class SelectsWrapper extends CommonComponent {
  #service;

  #store;

  constructor(store, service) {
    super(TagNames.DIV);
    if (store instanceof Store) {
      this.#store = store;
    }
    if (service instanceof CoinsService) {
      this.#service = service;
    }
  }

  renderComponents() {
    this.addClassName('currency');
    const currenciesSelect = new CurrenciesSelect(this.#store, this.#service).renderCurrenciesSelect();
    const coinsSelect = new CoinsSelect(this.#store, this.#service).renderCoinsSelect();

    this.appendChildren(currenciesSelect, coinsSelect);
    return this.getComponent();
  }
}
