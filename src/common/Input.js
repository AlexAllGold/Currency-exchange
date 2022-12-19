import { CommonComponent } from './CommonComponent';
import { Store } from '@/store';
import { TagNames, Events, Attributes } from '@/utils';

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
    this.getComponent().addEventListener(Events.CHANGE, event => {
      this.#store.setState({ initialValue: event.target.value });
    });
    return this.getComponent();
  }

  #addTags(className) {
    this.addClassName(className);
    this.addAttribute(Attributes.NUMBER);
    this.addValue(1);
  }
}
