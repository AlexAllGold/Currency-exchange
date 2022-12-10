import { BaseCreateComponent } from './BaseCreateComponent';

export class CreateH1 extends BaseCreateComponent {
  constructor() {
    super('h1');
    this.addInnerHTML('Operations');
    this.renderCurrentElement();
  }

  renderCurrentElement() {
    document.querySelector('.header').appendChild(this.getComponent());
  }
}
