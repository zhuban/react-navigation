import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "../Stores/configureStore";
// import Root from "./Root";
import configDrawerNavigator from './Root';

const store = configureStore();
export default class Main extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      initApp:''
    };
  }
  componentDidMount() {
     storage.load({
        key: 'loginState',
     }).then(ret => {
       if (ret.userid === '1001') {
          this.setState({ 
             initApp:'Home'
          });
       }else{
          this.setState({ 
             initApp:'Login'
          });
       }
    }).catch(err => {
       this.setState({
           initApp:'Login',
       });
    });
  }
  render() {
    console.log(store.getState());
    const Root = configDrawerNavigator(this.state.initApp);
    if (!!this.state.initApp) {
      return (
         <Provider store={store}>
           <Root  />
         </Provider>
      );
    }
     return null;
  }
}
