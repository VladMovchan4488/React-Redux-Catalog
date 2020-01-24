import reducer, { initialState } from "./Products";
import { put, takeLatest } from "redux-saga/effects";
import { getProducts, parsing } from "./Products";
import {
  GET_PRODUCTS,
  GET_SEARCH,
  GET_CATEGORY,
  SET_CATEGORY_VALUE,
  GET_PRODUCTS_API
} from "./Products";
import {
  getProductsApi,
  getSearch,
  getCategory,
  setCategoryVAL
} from "./Products";
window.alert = jest.fn();

// Reducer
describe("My reducer", () => {
  // BLOCK 1
  it("GET_SEARCH", () => {
    const action = {
      type: GET_SEARCH,
      input: "test"
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      input: "test"
    });
  });

  // BLOCK 2
  it("GET_CATEGORY", () => {
    const action = {
      type: GET_CATEGORY,
      category: [1, 2, 3]
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      category: [1, 2, 3]
    });
  });

  // BLOCK 3
  it("GET_PRODUCTS", () => {
    const action = {
      type: GET_PRODUCTS,
      data: {
        products: [
          {
            name: "A3 Magnetic",
            img:
              "https://images-na.ssl-images-amazon.com/images/I/71Y4Ogr8BNL._SX679_.jpg",
            bsr_category: "Home & Kitchen",
            price: 15.79
          }
        ]
      }
    };
    expect(reducer(initialState, action)).toStrictEqual({
      ...initialState,
      products: [
        {
          name: action.data.products[0].name,
          img: action.data.products[0].img,
          bsr_category: action.data.products[0].bsr_category,
          price: action.data.products[0].price
        }
      ]
    });
  });

  // BLOCK 4
  it("SET_CATEGORY_VALUE", () => {
    const action = {
      type: SET_CATEGORY_VALUE,
      currentCategory: "test"
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      currentCategory: "test"
    });
  });
});

// Actions
describe("My actions", () => {
  it("getSearch", () => {
    expect(getSearch("test")).toEqual({ type: "GET_SEARCH", input: "test" });
  });

  it("setCategoryVAL", () => {
    expect(setCategoryVAL("test")).toEqual({
      type: "SET_CATEGORY_VALUE",
      currentCategory: "test"
    });
  });

  it("getCategory", () => {
    expect(getCategory([1, 2, 3])).toEqual({
      type: "GET_CATEGORY",
      category: [1, 2, 3]
    });
  });

  it("getProductsApi", () => {
    expect(getProductsApi()).toEqual({ type: "GET_PRODUCTS_API" });
  });
});

// Saga
global.axios = require("jest-fetch-mock");
describe("SAGA TEST", () => {
  global.fetch = require("jest-fetch-mock");

  it('Test1" ', () => {
    const generator = parsing();
    expect(generator.next().value).toEqual(
      takeLatest("GET_PRODUCTS_API", getProducts)
    );
    expect(generator.next().done).toBeTruthy();
  });

  it("Test2", () => {
    const mockResponse = { Products: "test" };
    const generator = getProducts();
    expect(generator.next().value.type).toEqual("CALL");
    expect(generator.next(mockResponse).value).toEqual(
      put({ type: "GET_PRODUCTS", data: { Products: "test" } })
    );
    expect(generator.next().done).toBeTruthy();
  });
});
