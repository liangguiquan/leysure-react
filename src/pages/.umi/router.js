import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import { routerRedux, dynamic as _dvaDynamic } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () => import('../../layouts/index.js'),
        })
      : require('../../layouts/index.js').default,
    routes: [
      {
        path: '/about',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../about/index.js'),
            })
          : require('../about/index.js').default,
        title: '关于我们',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: '关于我们',
        _title_default: 'zhou2.0',
      },
      {
        path: '/contact/email',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../contact/email/index.js'),
            })
          : require('../contact/email/index.js').default,
        _title: 'zhou2.0',
        _title_default: 'zhou2.0',
      },
      {
        path: '/contact',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../contact/index.js'),
            })
          : require('../contact/index.js').default,
        title: '联系我们',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: '联系我们',
        _title_default: 'zhou2.0',
      },
      {
        path: '/contact/wechat',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../contact/wechat/index.js'),
            })
          : require('../contact/wechat/index.js').default,
        _title: 'zhou2.0',
        _title_default: 'zhou2.0',
      },
      {
        path: '/details/:sNo',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../details/$sNo.js'),
            })
          : require('../details/$sNo.js').default,
        _title: 'zhou2.0',
        _title_default: 'zhou2.0',
      },
      {
        path: '/',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../index.js'),
            })
          : require('../index.js').default,
        title: 'LEYSURE设计',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'LEYSURE设计',
        _title_default: 'zhou2.0',
      },
      {
        path: '/joinus',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../joinus/index.js'),
            })
          : require('../joinus/index.js').default,
        title: '加入我们',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: '加入我们',
        _title_default: 'zhou2.0',
      },
      {
        path: '/management',
        exact: false,
        component: __IS_BROWSER
          ? _dvaDynamic({
              app: require('@tmp/dva').getApp(),
              models: () => [
                import('D:/前端FE/leysure-react/src/pages/management/models/loginUser.js').then(
                  m => {
                    return { namespace: 'loginUser', ...m.default };
                  },
                ),
              ],
              component: () => import('../management/_layout.js'),
            })
          : require('../management/_layout.js').default,
        routes: [
          {
            path: '/management/addBanner',
            exact: true,
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('D:/前端FE/leysure-react/src/pages/management/models/loginUser.js').then(
                      m => {
                        return { namespace: 'loginUser', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../management/addBanner/index.js'),
                })
              : require('../management/addBanner/index.js').default,
            title: '添加主页轮播图图片',
            Routes: [
              require('../../router/PrivateRouter').default,
              require('./TitleWrapper.jsx').default,
            ],
            _title: '添加主页轮播图图片',
            _title_default: 'zhou2.0',
          },
          {
            path: '/management/articleList/add',
            exact: true,
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('D:/前端FE/leysure-react/src/pages/management/models/loginUser.js').then(
                      m => {
                        return { namespace: 'loginUser', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../management/articleList/add.js'),
                })
              : require('../management/articleList/add.js').default,
            title: '添加文章',
            Routes: [
              require('../../router/PrivateRouter').default,
              require('./TitleWrapper.jsx').default,
            ],
            _title: '添加文章',
            _title_default: 'zhou2.0',
          },
          {
            path: '/management/articleList',
            exact: true,
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('D:/前端FE/leysure-react/src/pages/management/models/loginUser.js').then(
                      m => {
                        return { namespace: 'loginUser', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../management/articleList/index.js'),
                })
              : require('../management/articleList/index.js').default,
            title: '文章列表',
            Routes: [
              require('../../router/PrivateRouter').default,
              require('./TitleWrapper.jsx').default,
            ],
            _title: '文章列表',
            _title_default: 'zhou2.0',
          },
          {
            path: '/management/articleList/:sNo',
            exact: true,
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('D:/前端FE/leysure-react/src/pages/management/models/loginUser.js').then(
                      m => {
                        return { namespace: 'loginUser', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../management/articleList/$sNo.js'),
                })
              : require('../management/articleList/$sNo.js').default,
            title: '修改文章',
            Routes: [
              require('../../router/PrivateRouter').default,
              require('./TitleWrapper.jsx').default,
            ],
            _title: '修改文章',
            _title_default: 'zhou2.0',
          },
          {
            path: '/management/changePicture',
            exact: true,
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('D:/前端FE/leysure-react/src/pages/management/models/loginUser.js').then(
                      m => {
                        return { namespace: 'loginUser', ...m.default };
                      },
                    ),
                  ],
                  component: () =>
                    import('../management/changePicture/index.js'),
                })
              : require('../management/changePicture/index.js').default,
            title: '添加分类图片',
            Routes: [
              require('../../router/PrivateRouter').default,
              require('./TitleWrapper.jsx').default,
            ],
            _title: '添加分类图片',
            _title_default: 'zhou2.0',
          },
          {
            path: '/management',
            exact: true,
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('D:/前端FE/leysure-react/src/pages/management/models/loginUser.js').then(
                      m => {
                        return { namespace: 'loginUser', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../management/index.js'),
                })
              : require('../management/index.js').default,
            title: '后台管理系统',
            Routes: [
              require('../../router/PrivateRouter').default,
              require('./TitleWrapper.jsx').default,
            ],
            _title: '后台管理系统',
            _title_default: 'zhou2.0',
          },
          {
            path: '/management/login',
            exact: true,
            component: __IS_BROWSER
              ? _dvaDynamic({
                  app: require('@tmp/dva').getApp(),
                  models: () => [
                    import('D:/前端FE/leysure-react/src/pages/management/models/loginUser.js').then(
                      m => {
                        return { namespace: 'loginUser', ...m.default };
                      },
                    ),
                  ],
                  component: () => import('../management/login.js'),
                })
              : require('../management/login.js').default,
            title: '登录',
            Routes: [require('./TitleWrapper.jsx').default],
            _title: '登录',
            _title_default: 'zhou2.0',
          },
          {
            component: () =>
              React.createElement(
                require('D:/前端FE/leysure-react/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: false },
              ),
            _title: 'zhou2.0',
            _title_default: 'zhou2.0',
          },
        ],
        _title: 'zhou2.0',
        _title_default: 'zhou2.0',
      },
      {
        path: '/:kind',
        exact: true,
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () => import('../$kind.js'),
            })
          : require('../$kind.js').default,
        title: 'LEYSURE设计',
        Routes: [require('./TitleWrapper.jsx').default],
        _title: 'LEYSURE设计',
        _title_default: 'zhou2.0',
      },
      {
        component: () =>
          React.createElement(
            require('D:/前端FE/leysure-react/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
        _title: 'zhou2.0',
        _title_default: 'zhou2.0',
      },
    ],
    _title: 'zhou2.0',
    _title_default: 'zhou2.0',
  },
  {
    component: () =>
      React.createElement(
        require('D:/前端FE/leysure-react/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
    _title: 'zhou2.0',
    _title_default: 'zhou2.0',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
