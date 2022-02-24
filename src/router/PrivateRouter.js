import { connect } from "dva";
import { routerRedux } from "dva/router";
import { getLoginState } from '../services/loginAjax';
import React, { Component } from 'react'

class PrivateRouter extends Component {

    state = {
        loginState: false
    }

    async componentDidMount() {
        // 发送ajax，判断是否已经登录
        const result = await getLoginState();
        // console.log(result.content);
        this.setState({
            loginState: result.content
        });

        if (!result.content) {  // result.content:false 表示未登录，跳转到登录页面
            this.props.onNotLogin && this.props.onNotLogin();
            return null;
        }

    }

    render() {
        // console.log(this.state.loginState);
        return (
        this.state.loginState === true ? <>{this.props.children}</> : ''
        )
    }
}


const mapStateToProps = state => ({
    loginId: state.loginUser
})

const mapDispatchToProps = dispatch => ({
    onNotLogin() {  //未登录
        dispatch(routerRedux.push('/management/login'));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRouter);
