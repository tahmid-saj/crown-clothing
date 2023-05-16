import { createContext, useState, useEffect } from 'react';

import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils.js';

import SHOP_DATA from '../shop-data.js';

export const ProductsContext = createContext({
    products: [],

});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const value = { products };

    useEffect(() => {
        addCollectionAndDocuments("categories", SHOP_DATA)
    }, []);

    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    );
};