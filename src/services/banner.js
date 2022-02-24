
import axios from 'axios';
import qs from 'qs';

/**
 * 添加banner图片
 * @param {*} arr banner的id数组
 */
export async function addBanner(arr) {
    const param = qs.stringify({ids: arr});
    console.log(param);
    const url = '/api-fur/home/set_paper';   // 地址
    const resp = await axios.post(url, param).then(resp => resp.data);
    console.log(resp);
    return resp;
};


/**
 * 获取banner图片
 */
export async function getBanner() {
    const url = '/api-visit/home/get_paper';
    const resp = await axios.get(url).then(resp => resp.data);
    return resp;
}

