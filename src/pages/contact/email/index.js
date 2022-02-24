import React from 'react'
import Footer from '../../../components/Footer'
import styles from './index.css'

export default function index() {
    return (
        <>
            <div className={styles.emailWrapper}>
                <div className={styles.email}>
                    <div className={styles.item}>
                        <p>项目合作</p>
                        <p>Start a project</p>
                        <span>zhouanbin1990@163.com</span>
                    </div>
                    <div className={styles.item}>
                        <p>媒体合作</p>
                        <p>Publish our work</p>
                        <span>zhouanbin1990@163.com</span>
                    </div>
                </div>
                <div className={styles.footer}>
                    <Footer />
                </div>
            </div>


        </>
    )
}
