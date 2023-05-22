import { createContext, useState, useEffect } from 'react';

import { createAction } from '../utils/reducer/reducer.utils';

import { onAuthStateChangedListener, 
        createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';

// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER",
};

const useReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            };
        default:
            throw new Error(`Unhandled type ${type} in the useReducer`);
    }
}

const INITIAL_STATE = {
    currentUser: null
};

export const UserProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(useReducer, INITIAL_STATE);
    const { currentUser } = state;
    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
    };

    const value = { currentUser, setCurrentUser };

    // signOutUser();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            
            if (user) {
                createUserDocumentFromAuth(user);
            }

            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};

