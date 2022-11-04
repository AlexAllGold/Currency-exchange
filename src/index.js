import Post from "./Post";
import './styles/styles.css';
import WebpackLogo from './assets/webpack-logo.png';
import json from "./assets/json";

const post = new Post('ToString', WebpackLogo);

console.log('Post to string: ', post.toString());

console.log('Json: ', json);