import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// Redux
import { createStore, applyMiddleWare } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'


// Create redux store -> reducers -> 'actions' | applyMiddleWare()

const store = createStore(composeWithDevTools());

// Provide the store to react

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
