
import React from 'react'
import styles from './index.css'

/**
 * border: 边框的粗细，类型，颜色
 * borderBottom：底边粗细，类型，颜色
 * show: 是否显示
 */
export default function Loading(props) {
    const defaultProps = {
        border: "4px solid rgb(0, 0, 0)",
        borderBottom: "4px solid rgb(255, 0, 0)",
        show: false
    }

    const newProps = Object.assign({}, defaultProps, props);
    // console.log(newProps);

    if(!newProps.show){
        return null;
    }
    return (
        <div className={styles.container}>
            <div style={{ "border": newProps.border, "borderBottom":newProps.borderBottom }} className={styles.loading}></div>
        </div>
    )
}
