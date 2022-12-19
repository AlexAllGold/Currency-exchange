import { CommonComponent, Input } from '@/components/common';
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
    const currencyInput = new Input(this.#store);

    const button = new Button(this.#store);

    const coinsInput = new CoinInput(this.#store);

    this.appendChildren(
      currencyInput.renderInput('initial-value'),
      button.renderButton(),
      coinsInput.renderInput('result-value')
    );
    this.#store.subscribe(coinsInput);
    return this.getComponent();
  }
}
