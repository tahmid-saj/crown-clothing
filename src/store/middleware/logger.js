import { compose, createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

import { rootReducer } from './root.reducer';

export const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }

    console.log("type: ", action.type);
    console.log("payload: ", action.payload);
    console.log("currentState: ", store.getState());

    next(action);

    console.log("Next state: ", store.getState());
}