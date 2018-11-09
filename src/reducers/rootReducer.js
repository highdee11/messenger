import { combineReducers } from 'redux';
import  sendMessageReducer from './sendMessageReducer';

const rootReducer=combineReducers({
    sendMessageReducer
});

export default rootReducer;