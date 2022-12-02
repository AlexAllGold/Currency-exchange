export class CommonCreate {
  #component = []

  createOption(name, value) {
    this.#component = document.createElement('option')
    this.#component.value = value
    this.#component.innerHTML = name
  }

  createH1(name) {
    this.#component = document.createElement('h1')
    this.#component.innerHTML = name
  }

  createSelect(name) {
    this.#component = document.createElement('select')
    this.#component.className = name
  }

  createInput(className, attribute, value) {
    this.#component = document.createElement('input')
    this.#component.className = className
    this.#component.setAttribute('type', attribute)
    this.#component.setAttribute('value', value)
  }

  createButton(className, inner) {
    this.#component = document.createElement('button')
    this.#component.className = className
    this.#component.innerHTML = inner
  }

  renderCurrentElement(classname) {
    document.querySelector(classname).appendChild(this.#component)
  }
}
