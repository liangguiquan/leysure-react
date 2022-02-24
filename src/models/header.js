
export default {
    state: {
        show: false,  // 是否显示菜单menu
        withVideo: false,
        withPicture: false,
        tag: '',
        navShow: true
    },

    subscriptions: {

    },

    reducers: {
        changeShow(state, action) {
            return {
                ...state,
                show: action.payload
            }
        },
        
        changeNavShow(state, action) {
            return {
                ...state,
                navShow: action.payload
            }
        },

        changeStyles(state, action) {
            return {
                ...state,
                ...action.payload
            }
        },

        setTag(state, action) {
            return {
                ...state,
                ...action.payload
            }
        },



        changeVideoAndPicture(state, action){
            return {
                ...state,
                ...action.payload
            }
        }
    }
}