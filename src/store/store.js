import { compose, createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from "redux-thunk"

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

import { rootReducer } from './root.reducer';

const persistConfig = {
    key: "root",
    storage: storage,
    blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV === "development" && logger, thunk].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);

// Root-reducer

export const persistor = persistStore(store);

