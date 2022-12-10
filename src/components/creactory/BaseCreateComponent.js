export class BaseCreateComponent {
  #element;

  constructor(element) {
    this.#element = document.createElement(element);
  }

  getComponent() {
    return this.#element;
  }

  addClassName(classname) {
    this.#element.className = classname;
  }

  addValue(value) {
    this.#element.value = value;
  }

  addInnerHTML(text) {
    this.#element.innerHTML = text;
  }

  addAttribute(attribute, value) {
    this.#element.setAttribute('type', attribute);
    this.#element.setAttribute('value', value);
  }
}
