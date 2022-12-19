import { Store } from '@/store';
import { CoinsService } from '@/services';
import { Header } from '@/components/Header';
import { SelectsWrapper } from '@/components/Selects';
import { InputWrapper } from '@/components/Input';
import { CommonComponent } from '@/common/CommonComponent';

export class Form extends CommonComponent {
  #store;

  #service;

  constructor(store, service) {
    super('form');
    if (store instanceof Store) {
      this.#store = store;
    }
    if (service instanceof CoinsService) {
      this.#service = service;
    }
  }

  renderElements() {
    const header = new Header().renderComponents();
    const selects = new SelectsWrapper(this.#store, this.#service).renderComponents();
    const inputs = new InputWrapper(this.#store).renderComponents();

    this.appendChildren(header, selects, inputs);
    return this.getComponent();
  }
}
