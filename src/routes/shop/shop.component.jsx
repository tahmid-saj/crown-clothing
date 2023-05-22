import { Routes, Route } from 'react-router-dom';

import { useEffect, useContext, Fragment } from 'react';
import { useDispatch } from 'react-redux';

import { CategoriesContext, CategoriesProvider } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import CategoriesPreview from '../categories-preview/categories-preview.component';

import Category from "../category/category.component";

import './shop.styles.scss';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/category.action';

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments("categories");

            dispatch(setCategories(categoriesArray));
        };

        getCategoriesMap();
    }, []);


    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    );
};

export default Shop;