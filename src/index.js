import Exchange from './component/exchange'
import Buy from './component/buy'
import Sell from './component/sell'
import Send from './component/send'
import Post from './Post'
import './styles/styles.scss'

const post = new Post('ToString')

console.log('Post to string: ', post.toString())
