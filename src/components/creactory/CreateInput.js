import { BaseCreateComponent } from './BaseCreateComponent';

export class CreateInput extends BaseCreateComponent {
  constructor(className) {
    super('input');
    this.addClassName(className);
    this.addAttribute('number');
    this.addValue(0);
    this.renderCurrentElement();
  }

  renderCurrentElement() {
    document.querySelector('.input-exchange-value').appendChild(this.getComponent());
  }
}
