import React from 'react';
import styles from "./index.css";
import { NavLink } from "umi";

export default function Aside() {
    return (
        <ul className={styles.nav}>
            <li><NavLink exact activeClassName={styles.active} to="/management">后台管理首页</NavLink></li>
            <li><NavLink exact activeClassName={styles.active} to="/management/articleList">文章查询</NavLink></li>
            <li><NavLink exact activeClassName={styles.active} to="/management/articleList/add">添加文章</NavLink></li>
            <li><NavLink exact activeClassName={styles.active} to="/management/changePicture">切换分类图片</NavLink></li>
            <li><NavLink exact activeClassName={styles.active} to="/management/addBanner">切换主页轮播图</NavLink></li>
            {/* <li><NavLink exact activeClassName={styles.active} to="/management/addManager">添加管理员</NavLink></li>  */}
            <li><NavLink exact activeClassName={styles.active} to="/">网站首页</NavLink></li>
        </ul>
    )
}
