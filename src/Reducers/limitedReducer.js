"use strict";
const initialState = {
  status: "请求中",
  isSuccess: false,
  data: null
};
export default function limitedReducer(state = initialState, action) {
  switch (action.type) {
    case "error":
      return {
        ...state,
        status: "请求失败",
        isSuccess: false,
        data: null
      };
      break;
    case "success":
      return {
        ...state,
        status: "请求成功",
        isSuccess: true,
        data: action.data
      };
      break;
    default:
      return state;
  }
}
