export class Observable {
  #observers = [];

  subscribe(observer) {
    this.#observers.push(observer);
  }

  notifyObserve() {
    this.#observers.forEach(observer => {
      observer.update();
    });
  }
}
