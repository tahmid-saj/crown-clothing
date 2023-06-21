import { createSelector } from "reselect";

import { CategoriesState } from "./category.reducer";

import { selectCurrentUser } from "../user/user.selector";
import { CategoryMap } from "./category.types";
import { RootState } from "../store";

const selectCategoryReducer = (state: RootState) => {
    return state.categories;
};

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => {
        return categoriesSlice.categories;
    }
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => {
        return categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;

        return acc;
    }, {} as CategoryMap)
    }
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
);