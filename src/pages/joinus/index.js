/**
 * title: 加入我们
 * 
 */

import React from 'react'
import Footer from '../../components/Footer'
import styles from './index.css'
import joinusImg from '../../assets/images/join.png';


export default function index() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.imgWrapper}>
                    <img className={styles.img} src={joinusImg} alt="" />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>加入我们 JOIN US</h1>
                    <p className={styles.cn}>
                        LEYSURE是一家快速发展的工作室，目标是与世界上最具前瞻性的品牌合作。我们非常注重设计师的个人价值发挥与职业发展规划，我们喜欢与优秀的人共事，并一直在吸纳有才华和高积极性的设计师加入团队。
            </p>
                    <p className={styles.cn}>
                        如果你想在你的创意职业生涯中迈出下一步，请将你的作品集和简历发送到zhouanbin1990@163.com或浏览以下职位。
            </p>
                    <p className={styles.en}>
                        LEYSURE is a fast-growing design company with the goal of cooperating with the most forward-looking brands in the world. We pay attention to the designer's personal value and career development plan, we like to work with excellent people, and have been absorbing talented and highly motivated designers to join us.
            </p>
                    <p className={styles.en}>
                        If you want to take the next step in your creative career, please send your portfolio and resume to zhoubin1990@163.com or browse the following positions.
            </p>
                    <div className={styles.job}>
                        <p className={styles.item}>高级工业设计师 <span>Senior Industrial Designer</span></p>
                        <p className={styles.item}>中型工业设计师 <span>Mid-weight Industrial Designer</span></p>
                        <p className={styles.item}>实习设计师 <span className={styles.last}>Internship</span></p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
