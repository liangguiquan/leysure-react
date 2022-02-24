import React from 'react'
import Footer from '../../../components/Footer'
import styles from './index.css'
import code from '../../../assets/images/code.jpg'

export default function index() {
    return (
        <>
            <div className={styles.codeWrapper}>
                <div className={styles.code}>
                    <img src={code} alt="" />
                </div>
                <div className={styles.footer}>
                    <Footer />
                </div>
            </div>
        </>
    )
}
