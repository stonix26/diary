import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// Redux
import { createStore, applyMiddleWare } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';


// Create redux store -> reducers -> 'actions - actionType' | applyMiddleWare()

const store = createStore(rootReducer, composeWithDevTools());

// Provide the store to react

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
