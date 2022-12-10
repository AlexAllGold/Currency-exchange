import './styles/styles.scss';
import { CurrencyService } from './services';
import { Store } from './store';
import { CommonComponent, ResultComponent, CurrencySelectComponent } from './components';
import { RequestBuilder } from './utils';

const store = new Store();
const http = new RequestBuilder();
const service = new CurrencyService(store, http);
const currencyComponent = new CurrencySelectComponent(store, service);
currencyComponent.renderElement();
currencyComponent.renderOptions();
const resultComponent = new ResultComponent(store, service);

new CommonComponent('.exchange').setClick(resultComponent.exchange.bind(resultComponent));
