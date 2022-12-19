import { Observable } from './Observable';
import { roundCoin } from '@/utils';

export class Store extends Observable {
  #coins = [];

  #currencies = [
    { name: 'Hryvnia', symbol: 'UAH' },
    { name: 'Dollar', symbol: 'USD' },
    { name: 'Euro', symbol: 'EUR' }
  ];

  #selectedCurrency = this.#currencies.at(0).symbol;

  #selectedCoin;

  #result = 0;

  #initialValue = 1;

  getState() {
    return {
      result: this.#result,
      coins: this.#coins,
      currencies: this.#currencies,
      initialValue: this.#initialValue,
      selectedCoin: this.#selectedCoin,
      selectedCurrency: this.#selectedCurrency
    };
  }

  setState({ coins, result, selectedCoin, initialValue, selectedCurrency }) {
    this.#coins = coins || this.#coins;
    this.#result = result || this.#result || roundCoin(this.#coins.at(0).price);
    this.#selectedCoin = selectedCoin || this.#selectedCoin;
    this.#initialValue = initialValue || this.#initialValue;
    this.#selectedCurrency = selectedCurrency || this.#selectedCurrency;
    this.notifyObserve();
  }
}
