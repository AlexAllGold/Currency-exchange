export class Store {
  #coins = [];

  #result = '0';

  getState() {
    return { result: this.#result, coins: this.#coins };
  }

  setState({ coins, result }) {
    this.#coins = coins || this.#coins;
    this.#result = result || this.#result;
  }
}
