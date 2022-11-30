export class StoreExchange {
  #coins = []

  #initial = '0'

  #result = '0'

  getState() {
    return { result: this.#result, initial: this.#initial, coins: this.#coins }
  }

  setState({ coins, result }) {
    this.#coins = coins || this.#coins
    this.#result = result || this.#result
  }
}
