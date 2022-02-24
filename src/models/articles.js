
import { getArticles, deleteArticleById } from '../services/articles';
import { routerRedux } from "dva/router";

export default {
    state: {
        condition: { // 搜索条件
            tag: '',
            page: 1,
            size: 30
        },
        loadingStatus: false,
        result: {
            total: 0, // 总数据量
            datas: []  // 文章数据
        }
    },
    subscriptions: {
        listenUrl({ history, dispatch }) {
            history.listen((newLocation) => {
                // console.log(newLocation);
                let query = {};
                if (newLocation.pathname === '/news' || newLocation.pathname === '/press' || newLocation.pathname === '/furniture' || newLocation.pathname === '/household' || newLocation.pathname === '/lighting' || newLocation.pathname === '/interior' || newLocation.pathname === '/custom' || newLocation.pathname === '/') {
                    query.tag = newLocation.pathname.slice(1) || '';
                    query.size = newLocation.query.size && newLocation.query.size || 20;
                    query.page = newLocation.query.page && newLocation.query.page || 1;

                    dispatch({
                        type: "changeCondition",
                        payload: query
                    })
                    dispatch({
                        type: "fetchArticles"
                    })
                }

                if (newLocation.pathname === '/management/articleList') {
                    query.page = newLocation.query.page && newLocation.query.page || 1;
                    query.size = 10;
                    query.tag = '';

                    // console.log(query);
                    dispatch({
                        type: "changeCondition",
                        payload: query
                    })
                    dispatch({
                        type: "fetchArticles"
                    })
                }

            })
        }
    },

    reducers: {
        setResult(state, action) {
            return {
                ...state,
                result: action.payload
            }
        },

        changeLoadingStatus(state, action) {
            return {
                ...state,
                loadingStatus: action.payload
            }
        },

        // 改变仓库中的查询条件
        changeCondition(state, action) {
            return {
                ...state,
                condition: {
                    ...state.condition,
                    ...action.payload
                }
            }
        }
    },

    effects: {
        *setCondition(action, { put, select }) {
            // 根据查询的条件，修改地址，地址发生改变时，自动触发subscriptions中的listenUrl方法
            let condition = yield select(state => state.articles.condition);
            // console.log(condition);
            condition = {
                ...condition,
                ...action.payload
            }
            // console.log(condition);
            yield put(routerRedux.push(`?page=${condition.page}&size=${condition.size}`));
        },

        /**
         * 分页获取文章，可根据tag，获取文章
         * @param {*} action 
         * @param {*} param1 
         */
        *fetchArticles(action, { put, call, select }) {   // 副作用函数
            yield put({
                type: 'changeLoadingStatus',
                payload: true
            });
            const condition = yield select(state => state.articles.condition);
            const result = yield call(getArticles, condition);  // 调用接口
            // console.log(result);
            yield put({
                type: 'setResult',
                payload: {
                    total: result.total,
                    datas: result.list
                }
            });
            yield put({
                type: 'changeLoadingStatus',
                payload: false
            });

        },

        /**
         * 根据id删除文章
         * @param {*} action 
         * @param {*} param1 
         */
        *deleteArticle(action, { put, call, select }) {
            const id = action.payload.id;
            console.log(id);
            const result = yield call(deleteArticleById, id);
            console.log(result);
        }
    }
}