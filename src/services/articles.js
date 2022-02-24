import axios from 'axios';
import qs from 'qs';

/**
 * 分页获取文章列表
 * @param {*} page 页码
 * @param {*} size 每页显示的数量
 */
export async function getArticles({ page = 1, size = 20, tag = '' }) {
    let result = [];
    if (tag != '') {
        result = await axios(`/api-visit/goods/list/page/${page}/size/${size}/tag/${tag}`)
            .then(resp => resp.data).then(resp => resp.content);
        // result = await fetch(`/api-visit/goods/list/page/${page}/size/${size}/tag/${tag}`)
        //     .then(resp => resp.json()).then(resp => resp.content);
        return result;
    }
    else {
        result = await axios(`/api-visit/goods/list/page/${page}/size/${size}`)
            .then(resp => resp.data).then(resp => resp.content);
        return result;
        // result = await fetch(`/api-visit/goods/list/page/${page}/size/${size}`)
        //     .then(resp => resp.json()).then(resp => resp.content);

    }

};

/**
 * 添加文章
 * @param {*} artObj 
 */
export async function addArticle(datas) {
    console.log(datas);
    const url = '/api-fur/goods/insert';   // 地址
    const resp = await axios.post(url, datas).then(resp => resp.data);
    // console.log(resp);
    return resp;
};

/**
 * 修改文章
 * @param {*} artObj 
 */
export async function updateArticle(id, datas) {
    // console.log(id, datas);
    const formData = qs.stringify({
        id: id,
        data: datas
    });
    // console.log(formData);
    const url = `/api-fur/goods/update`;   // 地址
    const resp = await axios.post(url, formData).then(resp => resp.data);
    // console.log(resp);
    return resp;
};

/**
 * 根据文章id删除一篇文章/商品
 * @param {*} id 
 */
export async function deleteArticleById(id) {
    const config = qs.stringify({ id: id })
    const result = await axios.post(`/api-fur/goods/delete`, config).then(resp => resp.data);
    // console.log(result);
    return result;
};

/**
 * 根据文章编号s_no获取单个文章对象
 */
export async function getArticleBySNo(sNo) {
    const resp = await fetch(`/api-visit/goods/select/s_no/${sNo}`).then(resp => resp.json()).then(resp => resp.content)
    // console.log(resp);
    return resp;
};







