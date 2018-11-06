'use strict';
import { combineReducers } from 'redux';
import limitedReducer from './limitedReducer';
import operationReducer from './operationReducer';
import colorReducer from './colorReducer';
const rootReducer = combineReducers({
    limitedReducer:limitedReducer,
    operationReducer:operationReducer,
    colorReducer:colorReducer,
});

export default rootReducer;