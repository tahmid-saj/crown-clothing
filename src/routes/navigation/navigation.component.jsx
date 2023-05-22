import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { selectCurrentUser } from "../../store/user/user.selector";

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles.jsx';


const Navigation = () => {
  // const { currentUser } = useContext(UserContext);
  const currentUser = useSelector(selectCurrentUser);
  console.log(currentUser);

  const { isCartOpen } = useContext(CartContext);

    return (
      <Fragment>
    
        <NavigationContainer className="navigation">

            <LogoContainer className="logo-container" to="/">
                <CrownLogo className='logo'/>
            </LogoContainer>

            <NavLinks className="nav-links-container">
                <NavLink as="span" className="nav-link" to="/shop">
                    SHOP
                </NavLink>
                {
                  currentUser ? (
                    <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>)
                    : (
                      <NavLink className="nav-link" to="/auth">
                          SIGN IN
                      </NavLink>
                      )
                }

                <CartIcon/>
          </NavLinks>
          {isCartOpen && <CartDropdown/>}
    
        </NavigationContainer>
  
        <Outlet/>
      </Fragment>
    );
};

export default Navigation;