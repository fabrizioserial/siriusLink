import { createBrowserHistory } from 'history'
import {applyMiddleware, compose, createStore} from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import logger from 'redux-logger';
import rootReducer from "./rootReducer";
import commonMiddleware from '../common/common.middleware';
import homeMiddleware from '../home/home.middleware';
// [CONFIGURE STORE] IMPORT MIDDLEWARE

const persistConfig = {
    key: 'root',
    storage,
};


const history = createBrowserHistory();
const persistedReducer = persistReducer(persistConfig, rootReducer(history));

const middleware = routerMiddleware(history);

const store = process.env.NODE_ENV === 'production' ? createStore(
    persistedReducer,
    undefined,
    compose(applyMiddleware(
        thunk,
        middleware,
        commonMiddleware,
		homeMiddleware,
        // [CONFIGURE STORE] ADD MIDDLEWARE PROD
    ))
) : createStore(
    persistedReducer,
    undefined,
    compose(applyMiddleware(
        thunk,
        logger,
        middleware,
        commonMiddleware,
		homeMiddleware,
        // [CONFIGURE STORE] ADD MIDDLEWARE DEV
    ))
);

const persistor = persistStore(store);

export { store, persistor, history };
