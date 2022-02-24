import React from 'react'
import styles from './index.css'
import right from '../../assets/images/right.png'
import left from '../../assets/images/left.png'


/**
 * 分页组件
 * 属性:
 * 1. current 当前页码
 * 2. total 数据总量
 * 3. limit 页容量
 * 4. panelNumber 数字页码的数量
 * 5. onPageChange 当页码改变时的事件
 */
export default function Pagination(props) {
    // console.log(props);

    let pageNumber = getPageNumber(props);  // 得到总页数
    if (pageNumber === 0) {
        return null;
    }

    let min = getMinNumber(props);
    let max = getMaxNumber(min, pageNumber, props);
    let numbers = [];
    for (let i = min; i <= max; i++) {
        numbers.push(<span key={i} onClick={() => { toPage(i, props) }} className={i === props.current ? `${styles.item} ${styles.active}` : `${styles.item}`} >{i}</span>)
    }

    return (
        <div className={styles.pagination}>
            <span
                onClick={() => { toPage(props.current - 1 < 1 ? 1 : props.current - 1, props) }}
                // className={props.current === 1 ? "item disabled" : "item"}
                className={props.current === 1 ? `${styles.item} ${styles.disabled}` : `${styles.item}`}
            ><img className={styles.img} src={left}/></span>

            {/* 数字页码 */}
            {numbers}

            <span
                onClick={() => { toPage(props.current + 1 > pageNumber ? pageNumber : props.current + 1, props) }}
                className={props.current === pageNumber ? `${styles.item} ${styles.disabled}` : `${styles.item}`}
            ><img className={styles.img} src={right} /></span>
        </div>
    )
}

/**
 * 计算总页数
 * @param {*} props 
 */
function getPageNumber(props) {
    return Math.ceil(props.total / props.limit);
}

/**
 * 计算最小数字
 * @param {*} props 
 */
function getMinNumber(props) {
    let min = props.current - Math.round(props.panelNumber / 2);
    if (min < 1) {
        min = 1;
    }
    return min;
}


/**
 * 计算最大数字
 * @param {*} min 
 * @param {*} pageNumber 
 */
function getMaxNumber(min, pageNumber, props) {
    let max = min + props.panelNumber - 1;
    if (max > pageNumber) {
        max = pageNumber;
    }
    return max;
}

/**
 * 跳转到某一页
 * @param {*} target 
 * @param {*} props 
 */
function toPage(target, props) {
    if (props.current === target) {
        return; // 目标页码和当前页码相同
    }
    props.onPageChange && props.onPageChange(target);
}