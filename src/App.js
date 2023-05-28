import { Routes, Route, Outlet } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

import { createContext, useState, useEffect, useReducer } from 'react';

import { createAction } from './utils/reducer/reducer.utils';

import { onAuthStateChangedListener, 
        createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';

import { setCurrentUser } from './store/user/user.action';
import { getCurrentUser } from './utils/firebase/firebase.utils';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser().then((user) => console.log(user));
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index={true} element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  );
}

export default App;
