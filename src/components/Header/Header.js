import { CommonComponent } from '@/components/common';
import { TagNames } from '@/utils';

export class Header extends CommonComponent {
  constructor() {
    super(TagNames.DIV);
  }

  renderComponents() {
    this.addClassName('header');
    const H1 = new CommonComponent(TagNames.H1);
    H1.addInnerHTML('Operations');
    this.getComponent().appendChild(H1.getComponent());
    return this.getComponent();
  }
}
