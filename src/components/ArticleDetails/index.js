import React, { Component } from 'react'
import { getArticleBySNo } from '../../services/articles'
import DetailsBanner from '../DetailsBanner'
import DetailsVideo from '../DetailsVideo'
import styles from './index.css'
import Footer from '../Footer'
import { connect } from 'dva'


class ArticleDetails extends Component {
    state = {
        isLoading: false,
        art: {}
    }

    async componentDidMount() {
        window.scroll(0, 0);
        if (this.props.sNo) {
            this.setState({
                isLoading: true
            })
            const art = JSON.parse(await getArticleBySNo(this.props.sNo)); // this.props.sNo是字符串
            art.ctime = art.ctime.split('-').join('.');
            art.topImgUrl = art.banner_img[0] && art.banner_img[0].url;

            if (!art.video_src) {
                art.banner_img.splice(0, 1);
            }

            art.pictures = art.banner_img.map((item) => {
                return (<div className={styles.imgWrapper} key={item.id}><img className={styles.img} src={item.url} alt='' /></div>);
                // return (<div className={styles.imgWrapper} key={item.id}><img className={styles.img} src="https://layerdesign.com/wp-content/uploads/2019/02/website-large-image-2560-1440-3.jpg" alt='' /></div>);
            });

            this.setState({
                art,
                isLoading: false
            })
            let videoFlag = art.video_src ? true : false ;
            let pictureFlag = art.video_src ? false : true ;
            this.props.onChange && this.props.onChange(videoFlag, pictureFlag);
            this.props.onSetTag && this.props.onSetTag(art.tag);
        }
        document.title = this.state.art.title;
    }


    componentWillUnmount(){
        this.props.onChange && this.props.onChange(false, false);
    }

    render() {
        // console.log(this.state.art);
        return (
            <div className={styles.container}>
                {/* 大图或视频 */}
                {
                    this.state.art.video_src ? <DetailsVideo src={this.state.art.video_src.url} /> : <DetailsBanner src={this.state.art.topImgUrl} />
                    // this.state.art.video_src ? <DetailsVideo src='http://1253128055.vod2.myqcloud.com/db0c6f87vodtransgzp1253128055/09e7d29b5285890801600466200/v.f40.mp4' /> : <DetailsBanner src={"http://attach.bbs.miui.com/forum/201111/21/205700txzuacubbcy91u99.jpg"} />
                }
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div className={styles.subInfo}>
                            <span className={styles.ctime}>{this.state.art.ctime}</span>
                            -
                            <span className={styles.tag}>{this.state.art.tag}</span>
                        </div>
                        <div className={styles.title}>
                            <h1>{this.state.art.title}</h1>
                        </div>
                    </div>

                    <div className={styles.description}>
                        {
                            this.state.art.description && this.state.art.description.split('\n').map((item, index) => {
                                // console.log(item);
                                return (
                                    <p key={index} className={styles.txt}>{item}</p>
                                )
                            })
                        }
                    </div>

                    <div className={styles.pictures} >
                        {this.state.art.pictures}
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    onChange(videoFlag, pictureFlag) {
        dispatch({
            type: 'header/changeVideoAndPicture',
            payload: {
                withVideo: videoFlag,
                withPicture: pictureFlag
            }
        })
    },
    onSetTag(tag){
        dispatch({
            type: 'header/setTag',
            payload: {
                tag: tag
            }
        })
    }
})


export default connect(null, mapDispatchToProps)(ArticleDetails);