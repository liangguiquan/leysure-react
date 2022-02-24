
const baseUrl = 'http://zhouanbin.com'

// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'zhou2.0', 
      dll: false,
      
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  theme: {
    'primary-color': '#1890ff'
  },
  proxy: { 
    '/api-common/file/upload': {  // 图片上传地址
      target: baseUrl,
      changeOrigin: true
    },
    '/api-fur/user/logout': {  // 登出
      target: baseUrl,
      changeOrigin: true
    },
    '/api-fur/user/login_state': {  // 查看登录状态
      target: baseUrl,
      changeOrigin: true
    },
    '/api-common/file/get_file': {  // 根据文件id获取文件的路径信息
      target: baseUrl,
      changeOrigin: true
    },
    '/api-fur/goods/insert': {  // 发布文章/产品
      target: baseUrl,
      changeOrigin: true
    },
    '/api-fur/goods/update': {  // 更新文章/产品
      target: baseUrl,
      changeOrigin: true
    },
    '/api-visit/goods/select': {  // 根据sno查询文章  示例：api-fur/goods/select_goods/s_no/4342
      target: baseUrl,
      changeOrigin: true
    },
    '/api-fur/goods/delete': {  // 删除文章
      target: baseUrl,
      changeOrigin: true
    },
    '/api-visit/goods/list': {  // 分页查询文章/产品   示例：api-fur/goods/list/page/3/size/20
      target: baseUrl,
      changeOrigin: true
    },
    '/api-fur/home/set_paper': {  // banner 上传banner图片
      target: baseUrl,
      changeOrigin: true
    },
    '/api-visit/home/get_paper': {  // banner 获取轮播图banner图片
      target: baseUrl,
      changeOrigin: true
    },
    '/api-fur/category/update': {  // 设置分类大图
      target: baseUrl,
      changeOrigin: true
    },
    '/api-visit/category/select': {  // 获取分类大图
      target: baseUrl,
      changeOrigin: true
    },
    '/api': {
      target: baseUrl,
      changeOrigin: true
    }
  }
}
