import React from 'react'
import {connect } from 'dva'
import { routerRedux } from "dva/router"
import styles from "./index.css"
import logo from '../../assets/images/logo1.png'

function BehindHeader(props) {
    return (
        <div className={styles.header}>
            <div className={styles.logo}><img className={styles.logoImg} src={logo} /></div>
            <h1 className={styles.title}>后台管理系统</h1>
            <div className={styles.loginInfo}>
                <span>欢迎您</span>
                <span>{props.loginId ? props.loginId : '请登录'}</span>
                <span className={styles.loginOutBtn} onClick={props.onLoginOut}>退出登录</span>
            </div>
        </div>
    )
}

const mapStateToProps = state =>({
    loginId: state.loginUser
})

const mapDispatchToProps = dispatch =>({
    onLoginOut(){
        dispatch({type: 'loginUser/loginOut'});
        dispatch(routerRedux.push('/management/login'));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(BehindHeader);