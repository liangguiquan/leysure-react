import { login, logout, getLoginState } from "../../../services/loginAjax";
export default {
    state: null,
    subscriptions: {
        syncLocalstorage({ dispatch }) {
            // 同步本地存储
            let loginId = localStorage.getItem('loginId');
            if (loginId) {
                // 已经登录过了
                dispatch({
                    type: 'setLoginUser',
                    payload: loginId
                })
            }
        }
    },
    reducers: {
        setLoginUser(state, action) {
            return action.payload;
        }
    },
    // effects: {
    //     *login({ payload }, { put }) {
    //         const { loginId, loginPwd } = payload;
    //         if (loginId === 'admin') {
    //             // 登录成功
    //             yield put({ type: 'setLoginUser', payload: loginId });
    //             yield localStorage.setItem('loginId', loginId);
    //             return true;
    //         }
    //         else {
    //             return false;
    //         }
    //         // 发送ajax请求
    //         // const result = fetch
    //     },
    //     *loginOut({ payload }, { put }) {
    //         yield localStorage.removeItem('loginId');
    //         yield put({ type: 'setLoginUser', payload: null });
    //         // 发送ajax请求
    //         // const result = fetch
    //     }
    // },

    effects: {
        *login({ payload }, { call, put }) {
            // 发送ajax请求
            const { loginId, loginPwd } = payload;
            const state = yield call(getLoginState);
            if (!state.content) {  // state.content为false代表未登录
                const result = yield call(login, payload);
                if (result.code === 0) {  // 0代表登录成功
                    yield put({ type: 'setLoginUser', payload: loginId });
                    yield localStorage.setItem('loginId', loginId);
                }
                return result;
            }

        },
        *loginOut(action, { call, put }) {
            const state = yield call(getLoginState);
            if (state.content) {  // state.content:true 代表已登录
                // 发送ajax请求
                // 如果已经登录了，则登出，如果没登录，则什么也不做
                const result = yield call(logout);
                console.log(result);
                if (result.code === 0) {
                    yield localStorage.removeItem('loginId');
                    yield put({ type: 'setLoginUser', payload: null });
                }
            }
        }
    }
}