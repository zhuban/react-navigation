"use strict";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducers/index";
/**
 * 根据需求添加其他的 中间件
 */
let middlewares = [thunk];
let createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
export let store = createStoreWithMiddleware(rootReducer);
export default function configureStore(initialState = {}) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
