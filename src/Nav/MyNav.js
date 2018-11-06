import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Platform
} from 'react-native';
import { connect } from "react-redux"; // 引入connect函数
import { bindActionCreators } from 'redux';
import * as colorAction from "../Actions/colorAction"; // 导入action方法
var {height, width} = Dimensions.get('window');
@connect(
  state => {
    return {
      color: state.colorReducer.color,
    };
  },
  dispatch => ({
    actions: bindActionCreators(colorAction,dispatch)
  })
)
export default class MyNav extends Component{
      leftbutton=()=>{

        if (this.props.leftIcon === null) {
             
        }else{
           this.props.leftbutton();
        }
      };
      rightbutton=()=>{
         if (this.props.rightIcon !== null||this.props.rightBtnTitle !== null ) {
              this.props.rightbutton();
              //导航背景改变模式
              // this.props.actions.red();
        }else{
            
        }
      };
      searchBtn=()=>{
         if (this.props.stateType === '2'){
              this.props.searchBtn();
         }
      };
      editBtn=()=>{
         if (this.props.stateType === '2'){
              this.props.editBtn();
         }
      };
      static defaultProps = {
         leftIcon: null,
         rightIcon:null,
         leftIconWidth:20,
         leftIconHeight:19,
         rightIconWidth:20,
         rightIconHeight:19,
         status:true,
         stateType:'0',
         rightBtnTitle:null,
         rightBtnTitleColor:'#B76C54',
      }
    rightBtn(){
      if(this.props.stateType === '0'){
          return(

              <View style={{width:80,marginTop:Platform.OS=='ios'?height===812?20:0:0}}>
              </View>
           );
       }else if(this.props.stateType === '1'){
           return(

              <TouchableOpacity style={{width:80,marginTop:Platform.OS=='ios'?height===812?20:0:0}}
                                onPress={()=>{this.rightbutton()}}>
                   <Text style={{marginLeft:40,
                                 marginTop:Platform.OS=='ios'?30:15,
                                 color:this.props.rightBtnTitleColor,}}>{this.props.rightBtnTitle}</Text>
              </TouchableOpacity>
           );
       }else if(this.props.stateType === '2') {
           return(
                  <View style={{width:80,flexDirection:'row'}}>
                      <TouchableOpacity style={{flex:1}}
                                        onPress={()=>{this.searchBtn()}}>
                            <Image style={{width:44,
                                           height:44,
                                           marginTop:Platform.OS=='ios'?15:6,
                                         }}
                                    source={require('../Images/mc_forum_top_bar_button10_n.png')}
                     />
                      </TouchableOpacity>
                      <TouchableOpacity style={{flex:1}}
                                        onPress={()=>{this.editBtn()}}>
                            <Image style={{width:44,
                                           height:44,
                                           marginTop:Platform.OS=='ios'?15:6,
                                         }}
                                    source={require('../Images/mc_forum_top_bar_button21_n.png')}
                    />
                      </TouchableOpacity>
                  </View>
              );
       }else{
           return(

             <TouchableOpacity style={{width:80,marginTop:Platform.OS=='ios'?height===812?20:0:0}}
                                  onPress={()=>{this.rightbutton()}}>
                      <Image style={{width:this.props.rightIconWidth,
                                     height:this.props.rightIconHeight,
                                     marginTop:Platform.OS=='ios'?30:15,
                                     marginLeft:50}}
                             source={this.props.rightIcon}
                      />
                    
              </TouchableOpacity>
           );
       }
    }
   render(){
      const { color } = this.props;
      return(
            <View style={[this.props.status===true?styles.navLineShow:styles.navLineHidden,{backgroundColor:color}]}>
               {this.props.leftIcon!==null?
                <TouchableOpacity style={{width:80,marginTop:Platform.OS=='ios'?height===812?20:0:0}}
                                 onPress={()=>{this.leftbutton()}}>
                      <Image style={{width:this.props.leftIconWidth,
                                     height:this.props.leftIconHeight,
                                     marginTop:Platform.OS=='ios'?30:15,
                                     marginLeft:10}}
                             source={this.props.leftIcon}/>
               </TouchableOpacity>:<View style={{width:80,marginTop:Platform.OS=='ios'?height===812?20:0:0}}></View>}

               <View style={{width:width-160,alignItems:'center',marginTop:Platform.OS=='ios'?height===812?20:0:0}}>
                     <Text style={{fontSize:18,
                                   fontWeight:'bold',
                                   color:this.props.textColor,
                                   backgroundColor: 'transparent',
                                   marginTop:Platform.OS=='ios'?30:15}}>{this.props.title}
                     </Text>
               </View>
               {this.rightBtn()}
           </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  navLineShow:{
    height:Platform.OS=='ios'?height===812?84:64:54,
    flexDirection:'row',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 4,
    borderColor:'#BDBDBD',
    borderBottomWidth:0.5
  },
  navLineHidden:{
    height:Platform.OS=='ios'?height===812?84:64:54,
    flexDirection:'row',
  }

});