import { Attributes, TagNames } from '@/utils';

export class CommonComponent {
  #element;

  constructor(element) {
    this.#element = document.createElement(element);
  }

  getComponent() {
    return this.#element;
  }

  addClassName(classname) {
    this.#element.className = classname;
    return this;
  }

  addValue(value) {
    this.#element.value = value;
    return this;
  }

  addInnerHTML(text) {
    this.#element.innerHTML = text;
    return this;
  }

  addAttribute(attribute, value) {
    this.#element.setAttribute(Attributes.TYPE, attribute);
    this.#element.setAttribute(Attributes.VALUE, value);
    return this;
  }

  addOptions(item) {
    const option = new CommonComponent(TagNames.OPTION);
    option.addInnerHTML(item.name);
    option.addValue(item.symbol);
    this.getComponent().appendChild(option.getComponent());
    return this;
  }

  isDisabled(isDisabled) {
    this.#element.toggleAttribute(Attributes.DISABLED, isDisabled);
    return this;
  }

  appendChildren(...children) {
    children.forEach(child => {
      this.getComponent().appendChild(child);
    });
    return this;
  }
}
