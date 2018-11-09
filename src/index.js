import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider ,  wit} from "react-redux";
import { createStore , applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import openSocket from 'socket.io-client';

const socket =openSocket("http://localhost:8000");

        
const store=createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({socket})));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
