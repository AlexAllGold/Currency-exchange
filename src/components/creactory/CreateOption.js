import { BaseCreateComponent } from './BaseCreateComponent';

export class CreateOption extends BaseCreateComponent {
  constructor() {
    super('option');
    this.addInnerHTML('Dollar');
    this.renderCurrentElement();
  }

  renderCurrentElement(sel) {
    if (sel !== undefined) {
      document.querySelector('.result-currency').appendChild(this.getComponent());
    } else {
      document.querySelector('.changeable-currency').appendChild(this.getComponent());
    }
  }
}
