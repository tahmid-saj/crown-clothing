import { compose, createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

import { rootReducer } from './root.reducer';

const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }

    console.log("type: ", action.type);
    console.log("payload: ", action.payload);
    console.log("currentState: ", store.getState());

    next(action);

    console.log("Next state: ", store.getState());
}

const persistConfig = {
    key: "root",
    storage: storage,
    blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);

// Root-reducer

export const persistor = persistStore(store);

