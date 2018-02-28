import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const metaTag=document.createElement('meta');
metaTag.name = 'viewport'
metaTag.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0'
document.getElementsByTagName('head')[0].appendChild(metaTag);

const linkTag=document.createElement('link');
linkTag.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
linkTag.rel = 'stylesheet';
document.getElementsByTagName('head')[0].appendChild(linkTag);


ReactDOM.render( <App /> , document.getElementById('root'));
registerServiceWorker();
