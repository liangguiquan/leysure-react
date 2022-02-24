import React, { Component } from 'react'
import styles from './index.css'
import withRouter from 'umi/withRouter'
import { connect } from 'dva'

class Picture extends Component {
    state = {
        kindArr: [["news", "新闻"], ["press", "报道"], ["furniture", "家具"], ["household", "家居"], ["lighting", "灯具"], ["interior", "室内"], ["custom", "定制"]]
    }

    render() {
        const path = this.props.location.pathname.slice(1);
        let kind = '';
        for (let i = 0; i < this.state.kindArr.length; i++) {
            if (path === this.state.kindArr[i][0]) {
                kind = this.state.kindArr[i][1];
            }
        }
        const imgObj = this.props.imgList && this.props.imgList.filter((item) => {
            return item.name === kind;
        })[0];
        // console.log(imgObj);

        return (
            <div className={styles.picture}>
                <div className={styles.descWrapper}>
                    <p className={styles.desc}>{imgObj ? imgObj.desc : ''}</p>
                </div>
                <div className={styles.item}>
                    <img className={styles.img} src={imgObj ? imgObj.url : ''} alt="" />
                    {/* <img className={styles.img} src="http://attach.bbs.miui.com/forum/201111/21/205700txzuacubbcy91u99.jpg" alt="" /> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    imgList: state.pictures.imgList.content
})

export default connect(mapStateToProps, null)(withRouter(Picture));