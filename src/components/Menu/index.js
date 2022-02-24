import React, { Component } from 'react'
import Link from 'umi/link';
import { connect } from 'dva'
import Footer from '../Footer'
import styles from './index.css'
import Header from '../Header'

class Menu extends Component {


    state = {
        menuList: [
            {
                mid: 0,
                title: '关于 About',
                link: '/about'
            },
            {
                mid: 1,
                title: '联系 Contact',
                link: '/contact'
            },
            {
                mid: 2,
                title: '招聘 Join us',
                link: '/joinus'
            },
            {
                mid: 3,
                title: '新闻 News',
                link: '/news'
            },
            {
                mid: 4,
                title: '报道 Press',
                link: '/press'
            },
            {
                mid: 5,
                title: '家具 Furniture',
                link: '/furniture'
            },
            {
                mid: 6,
                title: '家居 Household',
                link: '/household'
            },
            {
                mid: 7,
                title: '灯具 Lighting',
                link: '/lighting'
            },
            {
                mid: 8,
                title: '室内 Interior Design',
                link: '/interior'
            },
            {
                mid: 9,
                title: '定制 Custom',
                link: '/custom'
            }
        ]
    }

    handleClick = () => {
        this.props.onChangeShow && this.props.onChangeShow();
        this.props.onChangeNavShow && this.props.onChangeNavShow();
    }

    render() {
        const dom = this.state.menuList.map(item => {
            return (<Link
                className={styles.link}
                to={item.link}
                key={item.mid}
                onClick={this.handleClick}
            >{item.title}</Link>)
        })
        return (
            <div className={styles.container} style={{ width: this.props.show ? "100vw" : "0", opacity: this.props.show ? "1" : "0" }}>
                <div className={styles.list}>
                    {dom}
                </div>
                {/* <div className={styles.footerWrapper}>
                    <Footer />
                </div> */}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    show: state.header.show,
    navShow: state.header.navShow
})


const mapDisPatchToProps = dispatch => ({
    onChangeShow() {
        dispatch({
            type: 'header/changeShow',
            payload: false
        })
    },
    onChangeNavShow() {
        dispatch({
            type: 'header/changeNavShow',
            payload: true
        })
    }
})


export default connect(mapStateToProps, mapDisPatchToProps)(Menu);