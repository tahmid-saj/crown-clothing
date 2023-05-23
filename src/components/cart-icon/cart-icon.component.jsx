import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from "../../store/cart.selector";
import { setIsCartOpen } from "../../store/cart.action";

// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg' 

import { CartContext } from '../../contexts/cart.context';
import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';

import './cart-icon.styles.jsx';

const CartIcon = () => {
    // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount);

    const isCartOpen = useSelector(selectIsCartOpen);
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return (
        <CartIconContainer className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon"/>

            <ItemCount className="icon-count">{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;