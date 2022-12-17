import './styles/styles.scss';
import { CoinsService } from '@/services';
import { Store } from '@/store';
import { RenderComponent } from '@/common';
import { HttpClient } from '@/utils';

const store = new Store();
const http = new HttpClient();
const service = new CoinsService(store, http);
const renderComponent = new RenderComponent(store, service);
renderComponent.renderElements();
