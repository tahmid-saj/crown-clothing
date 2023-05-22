import { useContext, Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../../store/categories/category.selector';

import ProductCard from '../../components/product-card/product-card.component';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);

    return (
        <Fragment className="category-preview-container">
            {
                Object.keys(categoriesMap).map(title => {

                    const products = categoriesMap[title];
                    
                    return <CategoryPreview key={title} title={title} products={products}/>
                })
            }
        </Fragment>
    );
};

export default CategoriesPreview;