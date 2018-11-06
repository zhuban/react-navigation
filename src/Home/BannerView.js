import React,{ Component,PropTypes } from 'react';
import { requireNativeComponent } from 'react-native';

// 封装组件
var RCTBannerView = requireNativeComponent('pannerView',null);

export default class BannerView extends Component {

    render(){

        return <RCTBannerView {...this.props} />;
    }

}

RCTBannerView.PropTypes = {
    /**
    * 属性类型，其实不写也可以，js会自动转换类型
    */
    // autoScrollTimeInterval: PropTypes.number,
    // imageURLStringsGroup: PropTypes.array,
    // autoScroll: PropTypes.bool,
    // onClickBanner: PropTypes.func
}

module.exports = RCTBannerView;