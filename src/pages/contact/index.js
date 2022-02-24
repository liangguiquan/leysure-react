/**
 * title: 联系我们
 * 
 */

import React, { useState } from 'react'
import styles from './index.css'
import Footer from '../../components/Footer'
import Link from 'umi/link'


export default function JoinUs() {

    const [show, setShow] = useState(false);

    const handleEnter = () => {
        console.log(2432)
        setShow(true);
    }

    const handleLeave = () => {
        setShow(false);
    }

    return (
        <div className={styles.container}>
            <div className={styles.list}>
                <Link className={styles.link} to="/contact/email">E-mail</Link>
                <a className={styles.link} href="https://weibo.com/zhouanbin">weibo</a>
                <Link className={styles.link} to="/contact/wechat">wechat</Link>
                <a className={styles.link} href="https://www.instagram.com/leysuredesign/">instagram</a>
                <a className={styles.link} href="https://twitter.com/LeysureDesign">twitter</a>
                <a className={styles.link} href="https://www.pinterest.com/LeysureDesign/boards/">pinterest</a>
                <a className={styles.link} href="https://www.facebook.com/anbin.zhou">facebook</a>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}


 // https://weibo.com/zhouanbin

// http://weibo.cn/zhouanbin