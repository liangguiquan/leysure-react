import React, { Component } from 'react'
import WaterFall from '../WaterFall'
import Pagination from '../Pagination'
import { connect } from 'dva';
import styles from './index.css'



class WaterFallContainer extends Component {
    // componentDidMount() {
    //     console.log(this.props);
    // }


    render() {
        return (
            <>
                <WaterFall list={this.props.articles} isLoading={this.props.isLoading} />
                <Pagination {...this.props} panelNumber={3} onPageChange={this.props.onChange} />
            </>
        )
    }
}


const mapStateToProps = state => {
    // console.log(state);
    return ({
        articles: state.articles.result.datas,
        current: +state.articles.condition.page,
        limit: +state.articles.condition.size,
        isLoading: state.articles.loadingStatus,
        total: (state.articles.result.total !== null) ? +state.articles.result.total : 1
    })
}

const mapDispatchToProps = dispatch => ({
    onChange(newPage) {
        // 重新设置条件
        dispatch({
            type: 'articles/setCondition',
            payload: {
                page: newPage
            }
        });

        window.scroll(0, 0);
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(WaterFallContainer);
