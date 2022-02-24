
/**
 * 登录
 * 0:登录成功  1:用户名或密码错误  2:未知错误
 * @param {*} param0 
 */
export async function login({ loginId, loginPwd }) {
    const result = await fetch(`/api-fur/user/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: `username=${loginId}&password=${loginPwd}`
    })
        .then(resp => resp.json());
        // console.log(result);
        return result;
}



/**
 * 固定返回0
 * 登出
 */
export async function logout() {
    return await fetch(`/api-fur/user/logout`, {
        method: 'GET',
    })
        .then(resp => resp.json());
}
// {code: 0, content: null, message: "already log out."}



/**
 * 查看是否登录
 * 固定返回0  状态查看content字段  true：已登录  false：未登录
 */
export async function getLoginState() {
    const state =  await fetch(`/api-fur/user/login_state`, {
        method: 'GET',
    })
        .then(resp => resp.json());
        // console.log(state);
        return state;
}

// `{'code': 0,'content':false,'message': 'login state'}`