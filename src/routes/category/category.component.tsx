import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { CategoriesContext } from '../../contexts/categories.context';
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector';
import ProductCard from '../../components/product-card/product-card.component';
import { Spinner } from "../../components/spinner/spinner.component";

import "./category.styles.scss";

type CategoryRouteParams = {
    category: string;
}

const Category = () => {
    const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            {
                isLoading ? <Spinner/> : 
                <div className="category-container">
                {
                    products && products.map((product) => {
                        return (
                            <ProductCard key={products.id} product={product}/>
                        );
                    })
                }
            </div>
            }

            
        </Fragment>
        

    )
};

export default Category;