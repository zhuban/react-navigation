"use strict";
// 初始化
const initialState ={
	count: 0,
}

export default function counter(state=initialState, action){
     switch (action.type) {
     	case 'decrement':
     	  return{
     	    	...state,
     		    count: state.count - 1, 
     	  }
     	  break;
     	case 'increment':
     	   return{
     	   	    ...state,
     	   	    count: state.count + 1,
     	   }
     	   break;
     	default:
     	    return state;
     }
}