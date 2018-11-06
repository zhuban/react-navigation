"use strict";
// 初始化
const initialState ={
     color: '#1AA1E5',
}

export default function counter(state=initialState, action){
     switch (action.type) {
          case 'blue':
            return{
               ...state,
                   color: '#1AA1E5', 
            }
            break;
          case 'red':
             return{
                   ...state,
                   color: 'red',
             }
             break;
          default:
              return state;
     }
}