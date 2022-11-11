import { RequestBuilder } from './requestBuilder'

const url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=USD'
const curr = new RequestBuilder()
curr
  .sendRequest('GET', url)
  .then(data => console.log(data))
  .catch(err => console.log(err))
