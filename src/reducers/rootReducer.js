import { combineReducers } from 'redux'; 
import noPersistReducer from './NoPersistReducer';
import gameReducer from './GameReducer'; 

export default combineReducers({
    noPersistReducer,
    gameReducer
});