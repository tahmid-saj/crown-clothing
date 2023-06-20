import { AnyAction } from "redux";

// Type predicate
// type Alien = {
//     fly: () => {};
// };

// type Human = {
//     speak: () => {}
// };

// function isHuman(entity: Human | Alien): entity is Human {
//     return (entity as Human).speak !== undefined;
// };

export type ActionWithPayload<T, P> = {
    type: T;
    payload: P;
};

export type Action<T> = {
    type: T;
};

export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;

export function createAction<T extends string>(type: T, payload: void): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
    return { type, payload };
};

// export const createAction = ( type, payload ) => ({ type, payload });

