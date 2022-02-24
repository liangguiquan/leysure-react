import React, { Component } from 'react'
import Logo from '../Logo'
import MenuBtn from '../MenuBtn'
import withRouter from "umi/withRouter"
import Menu from '../Menu'
import { connect } from 'dva'
import styles from './index.css'

class Header extends Component {

    state = {
        bgColor: 'rgba(255, 255, 255, 0)'
    }

    handleListener = () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

        if (this.props.withVideo) {   // 详情页有video的情况
            const videoHeight = document.documentElement.clientWidth / 16 * 9;
            if (scrollTop <= videoHeight - 100) {
                this.setState({
                    bgColor: 'rgba(255, 255, 255, 0)'
                })
            }
            else {
                this.setState({
                    bgColor: 'rgba(255, 255, 255, 1)'
                })
            }
        }
        else {
            if (scrollTop <= clientHeight - 100) {
                this.setState({
                    bgColor: 'rgba(255, 255, 255, 0)'
                })
            }
            else {
                this.setState({
                    bgColor: 'rgba(255, 255, 255, 1)'
                })
            }
        }
    }

    componentDidMount() {
        // console.log(this.props);
        window.addEventListener('scroll', this.handleListener);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleListener);
    }

    render() {
        if (this.props.location.pathname === '/joinus') {
            return (
                <div className={styles.header} style={{ "backgroundColor": 'rgba(255, 255, 255, 1)' }} >
                    <div className={styles.logo}>
                        <Logo />
                    </div>
                    <div className={styles.menuBtn}>
                        <MenuBtn />
                    </div>
                    {
                        this.props.show && <div className={styles.menu}>
                            <Menu />
                        </div>
                    }
                </div>
            )
        }
        else {
            return (
                <div className={styles.header} style={{ "backgroundCo lor": this.state.bgColor }} >
                    <div className={styles.logo}>
                        <Logo />
                    </div>
                    <div className={styles.menuBtn}>
                        <MenuBtn />
                    </div>
                    {
                        this.props.show && <div className={styles.menu}>
                            <Menu />
                        </div>
                    }
                </div>
            )
        }
    }
}


const mapStateToProps = state => ({
    show: state.header.show,
    withVideo: state.header.withVideo,
    withPicture: state.header.withPicture
})


export default connect(mapStateToProps, null)(withRouter(Header));

