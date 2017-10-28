import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './Container'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(<BrowserRouter><Container /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
