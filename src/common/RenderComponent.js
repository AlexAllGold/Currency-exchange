import { Store } from '@/store';
import { CoinsService } from '@/services';
import { Header } from '@/components/Header';
import { SelectsWrapper } from '@/components/Selects';
import { InputWrapper } from '@/components/Input';

export class RenderComponent {
  #store;

  #service;

  constructor(store, service) {
    if (store instanceof Store) {
      this.#store = store;
    }
    if (service instanceof CoinsService) {
      this.#service = service;
    }
  }

  renderElements() {
    new Header().renderComponents();
    new SelectsWrapper(this.#store, this.#service).renderComponents();
    new InputWrapper(this.#store).renderComponents();
  }
}
