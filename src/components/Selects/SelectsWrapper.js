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
    this.renderElement(TagNames.APP, this.getComponent());
    new CurrenciesSelect(this.#store, this.#service).renderCurrenciesSelect();
    new CoinsSelect(this.#store, this.#service).renderCoinsSelect();
  }
}
