import { BaseCreateComponent } from './BaseCreateComponent';

export class CreateButton extends BaseCreateComponent {
  constructor(className) {
    super('button');
    this.addClassName(className);
    this.addInnerHTML('Exchange');
    this.renderCurrentElement();
  }

  renderCurrentElement() {
    document.querySelector('.input-exchange-value').appendChild(this.getComponent());
  }
}
