import { CommonComponent, Input } from '@/common';
import { Button } from './Button';
import { Store } from '@/store';
import { CoinInput } from './CoinInput';
import { TagNames } from '@/utils';

export class InputWrapper extends CommonComponent {
  #store;

  constructor(store) {
    super(TagNames.DIV);
    if (store instanceof Store) {
      this.#store = store;
    }
  }

  renderComponents() {
    this.addClassName('input-exchange-value');
    this.renderElement(TagNames.APP, this.getComponent());

    new Input(this.#store).renderInput('initial-value');
    new Button(this.#store).renderButton(this.#store);
    const coinsInput = new CoinInput(this.#store);
    coinsInput.renderInput('result-value');

    this.#store.subscribe(coinsInput);
  }
}
