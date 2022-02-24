/**
 * title: LEYSURE设计
 * 
 */

import React from 'react'
import BannerCmp from '../components/BannerCmp'
import Footer from '../components/Footer'
import WaterFallContainer from '../components/WaterFallContainer'
import styles from './index.css'


export default function index() {
  return (
    <div className={styles.container}>
        <BannerCmp />
        <WaterFallContainer />
        <Footer />
    </div>
  )
}

