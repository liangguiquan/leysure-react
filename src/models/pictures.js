import { getPicture } from '../services/pictures'

export default {
    state: {
        imgList: []
    },

    subscriptions: {
        listenUrl({ history, dispatch }) {
            history.listen(()=>[
                dispatch({
                    type: "fetchPictures"
                })
            ])
        }
    },

    reducers: {
        setImgList(state, action) {
            return {
                ...state,
                imgList: action.payload
            }
        }
    },

    effects: {
        *fetchPictures(action, { put, call, select }) {
            const result = yield call(getPicture);  // 调用接口
            // console.log(result);
            yield put({
                type: 'setImgList',
                payload: result
            });
        }
    }
}