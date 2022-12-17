import { CommonComponent } from './CommonComponent';
import { Store } from '@/store';
import { TagNames } from '@/utils';

export class Input extends CommonComponent {
  #store;

  constructor(store) {
    super(TagNames.INPUT);
    if (store instanceof Store) {
      this.#store = store;
    }
  }

  renderInput(className) {
    this.#addTags(className);
    this.renderElement('.input-exchange-value', this.getComponent());
    this.getComponent().addEventListener('change', event => {
      this.#store.setState({ initialValue: event.target.value });
    });
  }

  #addTags(className) {
    this.addClassName(className);
    this.addAttribute('number');
    this.addValue(1);
  }
}
