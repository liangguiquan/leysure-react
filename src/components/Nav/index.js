import React from 'react'
import styles from "./index.css"
import { NavLink } from "umi"
import { connect } from 'dva'

function Nav(props) {
    
    const list = [
        {
            title: "新闻 News",
            link: '/news'
        },
        {
            title: "报道 Press",
            link: '/press'
        },
        {
            title: "家具 Furniture",
            link: '/furniture'
        },
        {
            title: "家居 Household",
            link: '/household'
        },
        {
            title: "灯具 Lighting",
            link: '/lighting'
        },
        {
            title: "室内 Interior Design",
            link: '/interior'
        },
        {
            title: "定制 Custom",
            link: '/custom'
        }
    ]
    const nav = list.map((item, index) => (<li className={styles.item} key={index}><NavLink className={styles.link} exact activeClassName={styles.active} to={item.link}>{item.title}</NavLink></li>))

    return (
        <>
            {
                props.navShow ? <ul className={styles.nav}>
                    {nav}
                </ul> : ''
            }
        </>
    )
}

const mapStateToProps = state => ({
    navShow: state.header.navShow
})

export default connect(mapStateToProps, null)(Nav);