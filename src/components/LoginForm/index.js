import React, { useRef, useEffect } from 'react'
import { routerRedux } from "dva/router"
import { connect } from "dva"
import styles from './index.css'

function LoginForm(props) {

    useEffect(() => {
        window.onkeydown = function(e){
            if(e.keyCode === 13){
                // console.log(e.keyCode);
                handleLogin()
            }
        }
    })

    const txtLoginId = useRef();
    const txtLoginPwd = useRef();

    const handleLogin = () => {
        var loginId = txtLoginId.current.value;
        var loginPwd = txtLoginPwd.current.value;
        props.onLogin && props.onLogin(loginId, loginPwd);
    }

    return (
        <div className={styles.login}>
            <div className={styles.item}>
                <label>账号：</label>
                <input ref={txtLoginId} type='text' />
            </div>
            <div className={styles.item} >
                <label>密码：</label>
                <input ref={txtLoginPwd} type='password' />
            </div>
            <div className={styles.item}>
                <button onClick={handleLogin} >
                    登录
                </button>
            </div>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    async onLogin(loginId, loginPwd) {
        const result = await dispatch({ type: "loginUser/login", payload: { loginId, loginPwd } });
        console.log(result);
        if (result.code === 0) {
            dispatch(routerRedux.push("/management"));
        }
        else {
            window.alert("您的账号或密码填写错误");
        }
    }
})

export default connect(null, mapDispatchToProps)(LoginForm);