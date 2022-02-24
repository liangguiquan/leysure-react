/**
 * title: 关于我们
 * 
 */

import React from 'react'
import Footer from '../../components/Footer'
import styles from './index.css'
import about from '../../assets/images/about.jpg'

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.imgWarpper}>
                <img className={styles.img} src={about} alt="about" />
            </div>
            <div className={styles.text}>
                <p className={styles.item}>
                    LEISURE DESIGN 致力成为国际顶级家居生活设计方案提供者，囊括了包括德国红点设计至尊奖（Red dot best ofbest）、日本 G-mark、日本名古屋国际国际设计大奖、中国红星奖金奖、台湾金点奖在内的二十余项国际性设计大奖。
            </p>
                <p className={styles.item}>
                    LEISURE DESIGN 提供精准的设计策略服务，以国际化水平的设计创新能力；专业的生产工艺知识与国内外顶级合作工厂资源，精准打造符合品牌以及市场定位需求的产品体系，提供由市场到品牌到设计再到生产这一过程中环环相扣且无缝对接的产品解决方案服务，为企业节省设计方向确认以及设计转化过程中的沟通时间以及金钱成本，精准、高效地创造价值。
            </p>
                <p className={styles.item}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum qui fuga earum unde reprehenderit, id harum suscipit animi fugiat aliquid accusantium recusandae consequatur possimus vitae alias ad, porro voluptatem neque!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum qui fuga earum unde reprehenderit, id harum suscipit animi fugiat aliquid accusantium recusandae consequatur possimus vitae alias ad, porro voluptatem neque!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum qui fuga earum unde reprehenderit, id harum suscipit animi fugiat aliquid accusantium recusandae consequatur possimus vitae alias ad, porro voluptatem neque!
            </p>
            </div>
            <Footer/>
        </div>
    )
}
