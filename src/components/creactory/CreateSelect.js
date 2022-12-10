import { BaseCreateComponent } from './BaseCreateComponent';

export class CreateSelect extends BaseCreateComponent {
  constructor(className) {
    super('select');
    this.addClassName(className);
    this.renderCurrentElement();
  }

  renderCurrentElement() {
    document.querySelector('.currency').appendChild(this.getComponent());
  }
}
