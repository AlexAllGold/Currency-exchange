import { CommonComponent } from '@/common';
import { TagNames } from '@/utils';

export class Header extends CommonComponent {
  constructor() {
    super(TagNames.DIV);
  }

  renderComponents() {
    this.addClassName('header');
    const H1 = new CommonComponent(TagNames.H1);
    H1.addInnerHTML('Operations');
    this.renderElement('.app', this.getComponent());
    this.renderElement('.header', H1.getComponent());
  }
}
