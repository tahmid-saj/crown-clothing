import { CategoryItem } from "../categories/category.types";
import { CART_ACTION_TYPES, CartItem } from "./cart.types";
import { createAction, withMatcher, Action, ActionWithPayload } from '../../utils/reducer/reducer.utils';
import { CartItems } from "../../components/cart-dropdown/cart-dropdown.styles";

const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find((cartItem) => {
        return cartItem.id === productToAdd.id
    });

    // if found, increment quantity
    if (existingCartItem && existingCartItem.quantity === 1) {
        return cartItems.map((cartItem) => {
            return cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem;
        });
    }

    // return new array with modified cartItems / new cartItems
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem) => {
    return cartItems.filter((cartItem) => {
        return cartItem.id !== cartItemToClear.id;
    });
};

export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;

export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;

export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen => {
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
});

export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems => {
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);
})

export const addItemToCart = (cardItems: CartItem[], productToAdd: CategoryItem) => {
    const newCartItems = addCartItem(CartItems, productToAdd);

    return setCartItems(newCartItems);
};

export const removeItemToCart = (cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] => {
    const newCartItems = removeCartItem(CartItems, cartItemToRemove);

    return setCartItems(newCartItems);
};

export const clearItemFromCart = (cartItems: CartItem[], cartItemToClear: CartItem) => {
    const newCartItems = clearCartItem(CartItems, cartItemToClear);

    return setCartItems(newCartItems);
};
