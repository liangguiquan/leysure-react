
import axios from 'axios';

/**
 * 添加分类图片picture
 * @param {*}
 */
export async function setPicture(cid, desc, cover_id) {
  // console.log(cid, desc, cover_id);
  const url = '/api-fur/category/update';   // 地址
  let formData = new FormData();
  formData.append('cid', cid);
  formData.append('desc', desc);
  formData.append('cover_id', cover_id);
  const resp = await axios.post(url, formData).then(resp => resp.data);
  return resp;
}


/**
 * 获取picture分类图片
 */
export async function getPicture() {
  const url = '/api-visit/category/select';
  const resp = await axios.get(url).then(resp => resp.data);
  return resp;
}