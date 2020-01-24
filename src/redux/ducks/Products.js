import { takeLatest } from "redux-saga/effects";
import { put, call } from "redux-saga/effects";

// Actions
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_API = "GET_PRODUCTS_API";
export const GET_SEARCH = "GET_SEARCH";
export const GET_CATEGORY = "GET_CATEGORY";
export const SET_CATEGORY_VALUE = "SET_CATEGORY_VALUE";

// Default State
export const initialState = {
  input: "",
  products: [],
  category: [],
  currentCategory: "",
  pageSize: 5,
  totalCount: 20,
  currentPage: 2
};

// Dispatch
export const getProductsApi = () => ({ type: GET_PRODUCTS_API });
export const getSearch = input => ({ input, type: GET_SEARCH });
export const getCategory = category => ({ category, type: GET_CATEGORY });
export const setCategoryVAL = currentCategory => ({
  currentCategory,
  type: SET_CATEGORY_VALUE
});

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.data.products
      };
    case GET_SEARCH: {
      return { ...state, input: action.input };
    }
    case GET_CATEGORY: {
      return { ...state, category: action.category };
    }
    case SET_CATEGORY_VALUE: {
      return { ...state, currentCategory: action.currentCategory };
    }
    default:
      return state;
  }
};

// REDUX-SAGA
export function* getProducts() {
  const url = `products.json?page=${initialState.currentPage}&count=${initialState.pageSize}`;
  try {
    const data = yield call(() => {
      return fetch(url).then(res => res.json());
    });
    yield put({ type: GET_PRODUCTS, data });
  } catch (error) {
    console.error(error);
  }
}

export function* parsing() {
  yield takeLatest(GET_PRODUCTS_API, getProducts);
}

export default reducer;
