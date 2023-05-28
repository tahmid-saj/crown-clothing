import { all, call } from "redux-saga/effects";

import { categoriesSaga } from "./categories/category.saga";
import { userSagas } from "./root-saga";

// Generator function
export function* rootSaga() {
    yield all([call(categoriesSaga), call(userSagas)]);

};

