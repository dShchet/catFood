import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CatFood from './components/CatFood'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CatFood />,  document.getElementById('root'));

serviceWorker.unregister();
