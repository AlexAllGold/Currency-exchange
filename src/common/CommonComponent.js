import { TagNames } from '@/utils';

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
    return this.#element;
  }

  addValue(value) {
    this.#element.value = value;
    return this.#element;
  }

  addInnerHTML(text) {
    this.#element.innerHTML = text;
    return this.#element;
  }

  addAttribute(attribute, value) {
    this.#element.setAttribute('type', attribute);
    this.#element.setAttribute('value', value);
    return this.#element;
  }

  addOptions(item) {
    const option = new CommonComponent(TagNames.OPTION);
    option.addInnerHTML(item.name);
    option.addValue(item.symbol);
    this.getComponent().appendChild(option.getComponent());
  }

  renderElement(toClass, className) {
    return document.querySelector(toClass).appendChild(className);
  }

  isDisabled(isDisabled) {
    return this.#element.toggleAttribute('disabled', isDisabled);
  }
}
