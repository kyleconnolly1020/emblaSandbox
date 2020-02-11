import { createStore, applyMiddleware } from 'redux'; 
import { persistStore, persistReducer } from 'redux-persist'; 
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { composeWithDevTools } from 'redux-devtools-extension'; 

//potentially swap out for redux-saga 
import thunk from 'redux-thunk'; 
import rootReducer from './reducers/rootReducer'; 

const initialState = { }; 
const middleware = [thunk]; 

const persistConfig = {
    key: 'root', 
    blacklist: ['noPersistReducer'],
    storage, 
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleware)
    ));
export const persistor = persistStore(store); 