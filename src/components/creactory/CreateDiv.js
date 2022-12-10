import { BaseCreateComponent } from './BaseCreateComponent';

export class CreateDiv extends BaseCreateComponent {
  constructor(className) {
    super('div');
    this.addClassName(className);
    this.renderCurrentElement();
  }

  renderCurrentElement() {
    document.querySelector('.app').appendChild(this.getComponent());
  }
}
