import { useContext } from 'react';

// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg' 

import { CartContext } from '../../contexts/cart.context';
import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';

import './cart-icon.styles.jsx';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon"/>

            <ItemCount className="icon-count">{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;