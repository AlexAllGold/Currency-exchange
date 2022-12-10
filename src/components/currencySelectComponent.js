import { Store } from '../store';
import { CurrencyService } from '../services';
import { CreateDiv } from './creactory/CreateDiv';
import { CreateH1 } from './creactory/CreateH1';
import { CreateSelect } from './creactory/CreateSelect';
import { CreateOption } from './creactory/CreateOption';
import { CreateInput } from './creactory/CreateInput';
import { CreateButton } from './creactory/CreateButton';

export class CurrencySelectComponent {
  #store;

  #service;

  constructor(store, service) {
    if (store instanceof Store) {
      this.#store = store;
    }
    if (service instanceof CurrencyService) {
      this.#service = service;
    }
  }

  renderOptions() {
    this.#service.getCurrencies().then(() => {
      this.#store.getState().coins.forEach(coin => {
        const option = new CreateOption();
        option.addInnerHTML(coin.name);
        option.addValue(coin.symbol);
        option.renderCurrentElement('.result-currency');
      });
    });
  }

  renderElement() {
    new CreateDiv('header').renderCurrentElement();
    new CreateH1().renderCurrentElement();
    new CreateSelect('changeable-currency').renderCurrentElement();
    new CreateOption().renderCurrentElement();
    new CreateSelect('result-currency').renderCurrentElement();
    new CreateInput('initial-value').renderCurrentElement();
    new CreateInput('result-value').renderCurrentElement();
    new CreateButton('exchange').renderCurrentElement();
  }
}
