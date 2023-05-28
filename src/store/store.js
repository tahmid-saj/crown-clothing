import { compose, createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from "redux-thunk"

import createSagaMiddleware from "redux-saga";

import { rootSaga } from "./root-saga";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

import { rootReducer } from './root.reducer';

const persistConfig = {
    key: "root",
    storage: storage,
    blacklist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV === "development" && logger, sagaMiddleware].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

// Root-reducer

export const persistor = persistStore(store);

