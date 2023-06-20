import { AnyAction } from "redux";

type Matchable<AC extends () => AnyAction> = AC & {
    type: ReturnType<AC>["type"];
    match(action: AnyAction): action is ReturnType<AC>;
};

type Human = {
    name: string;
};

type Alien = {
    fly: () => void;
};

type Hybrid = Human & Alien;

const Josh: Hybrid = {
    name: "Josh",
    fly: () => {}
}

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

