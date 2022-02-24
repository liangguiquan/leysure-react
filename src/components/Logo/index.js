import React, { Component } from 'react'
import withRouter from "umi/withRouter"
import { connect } from 'dva'
import logo1 from '../../assets/images/logo1.png'
import logo2 from '../../assets/images/logo2.png'
import styles from './index.css'

class Logo extends Component {
    state = {
        logoSrc: logo1
    }

    handleListener = () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

        if (this.props.withVideo) {   // 详情页有video的情况
            const videoHeight = document.documentElement.clientWidth / 16 * 9;
            if (scrollTop <= videoHeight - 100) {
                this.setState({
                    logoSrc: logo1
                })
            }
            else {
                this.setState({
                    logoSrc: logo2
                })
            }
        }
        else {
            if (scrollTop <= clientHeight - 100) {
                this.setState({
                    logoSrc: logo1
                })
            }
            else {
                this.setState({
                    logoSrc: logo2
                })
            }
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleListener);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleListener);
    }

    render() {
        if (this.props.show) {  // 是否显示菜单栏
            return (
                <div className={styles.logoWrapper}>
                    <span onClick={() => {
                        this.props.onChangeShow && this.props.onChangeShow();
                        this.props.history.push('/');
                    }}><img className={styles.img} src={logo2} alt="logo" /></span>
                </div>
            )
        }
        else {  // 这两个页面都是显示logo2
            if (this.props.location.pathname === '/joinus' || this.props.location.pathname.includes('contact')) {
                return (
                    <div className={styles.logoWrapper}>
                        <span onClick={() => {
                            this.props.onChangeShow && this.props.onChangeShow();
                            this.props.history.push('/');
                        }}><img className={styles.img} src={logo2} alt="logo" /></span>
                    </div>
                )
            }
            else {
                return (
                    <div className={styles.logoWrapper}>
                        <span onClick={() => {
                            this.props.onChangeShow && this.props.onChangeShow();
                            this.props.history.push('/');
                        }}><img className={styles.img} src={this.state.logoSrc} alt="logo" /></span>
                    </div>
                )
            }
        }
    }
}


const mapStateToProps = state => ({
    show: state.header.show,
    withVideo: state.header.withVideo,
    withPicture: state.header.withPicture
})

const mapDisPatchToProps = dispatch => ({
    onChangeShow() {
        dispatch({
            type: 'header/changeShow',
            payload: false
        })
    }
})


export default connect(mapStateToProps, mapDisPatchToProps)(withRouter(Logo));

