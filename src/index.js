import './styles/styles.scss'
import { CurrencyService } from './services/currencyService'
import { StoreExchange } from './store/storeExchange'
import { ResultComponent } from './components/resultComponent'
import { CommonComponent } from './components/commonComponent'
import { CurrencySelectComponent } from './components/currencySelectComponent'

const store = new StoreExchange()
const service = new CurrencyService(store)
const currencyComponent = new CurrencySelectComponent(store)
const resultComponent = new ResultComponent(store, service)

service.getCurrencies().then(() => currencyComponent.renderOptions())

new CommonComponent('.exchange').setClick(resultComponent.exchange.bind(resultComponent))
