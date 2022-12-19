import './styles/styles.scss';
import { CoinsService } from '@/services';
import { Store } from '@/store';
import { Form } from '@/common';
import { HttpClient } from '@/utils';

const store = new Store();
const http = new HttpClient();
const service = new CoinsService(store, http);
const renderComponent = new Form(store, service);
// renderComponent.renderElements();
document.querySelector('.app').appendChild(renderComponent.renderElements());
