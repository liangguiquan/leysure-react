import React, { Component, useState, useEffect } from 'react'
import styles from './index.css'
import { connect } from 'dva'
import withRouter from "umi/withRouter"
import btnWhite from '../../assets/images/menubotton1.png'
import btnDark from '../../assets/images/menubotton2.png'
import btnLeft from '../../assets/images/menubotton3.png'


class MenuBtn extends Component {

    state = {
        btnSrc: btnWhite
    }

    handleListener = () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        if (this.props.withVideo) {  // 详情页有视频的情况下，该scroll多少就改变btn的样式
            const videoHeight = document.documentElement.clientWidth / 16 * 9;
            if (scrollTop <= videoHeight - 100) {
                this.setState({
                    btnSrc: btnWhite
                })
            }
            else {
                this.setState({
                    btnSrc: btnLeft
                })
            }
        }
        else if (this.props.withPicture) { // 详情页有大图的情况下，该scroll多少就改变btn的样式
            if (scrollTop <= clientHeight - 100) {
                this.setState({
                    btnSrc: btnWhite
                })
            }
            else {
                this.setState({
                    btnSrc: btnLeft
                })
            }
        }
        else {  // 不是详情页的情况
            if (scrollTop <= clientHeight - 100) {
                this.setState({
                    btnSrc: btnWhite
                })
            }
            else {
                this.setState({
                    btnSrc: btnDark
                })
            }
        }
    }

    componentDidMount() {
        console.log(this.props);
        window.addEventListener('scroll', this.handleListener);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleListener);
    }

    handleClick = () => {
        if(this.state.btnSrc === btnLeft){ // 跳转到该分类的文章
            let tag = this.props.tag.split(' ')[1].toLowerCase();
            // console.log(tag);
            this.props.history.push(`/${tag}`);

        }
        else {
            this.props.onChangeShow && this.props.onChangeShow(this.props.show);
            this.props.onChangeNavShow && this.props.onChangeNavShow(this.props.navShow);
        }
    }

    render() {
        if (this.props.show) {  // 是否显示menu菜单
            return (
                <div className={styles.closeBotton} onClick={this.handleClick}>
                    <span className={styles.close}>
                    </span>
                </div>
            )
        }
        else if (!this.props.show) {
            // joinus和contact页面，menubtn始终是黑色
            if (this.props.location.pathname === '/joinus' || this.props.location.pathname.includes('contact')) {
                return (
                    <div className={styles.botton} onClick={this.handleClick} >
                        <img className={styles.bottonIcon} src={btnDark} alt="" />
                    </div>
                )
            }
            else {
                return (
                    <div className={styles.botton} onClick={this.handleClick} >
                        <img className={styles.bottonIcon} src={this.state.btnSrc} alt="" />
                    </div>
                )
            }
        }
    }
}


const mapStateToProps = state => ({
    show: state.header.show,
    navShow: state.header.navShow,
    withVideo: state.header.withVideo,
    withPicture: state.header.withPicture,
    tag: state.header.tag
})

const mapDisPatchToProps = dispatch => ({
    onChangeShow(flag) {
        dispatch({
            type: 'header/changeShow',
            payload: !flag
        })
    },
    onChangeNavShow(flag) {
        dispatch({
            type: 'header/changeNavShow',
            payload: !flag
        })
    }
})

export default connect(mapStateToProps, mapDisPatchToProps)(withRouter(MenuBtn));