import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styles from './index.css'
import { getBanner } from '../../services/banner'

export default class index extends Component {

    state = {
        imgList: [],
    }
        // imgList: [
        //     {
        //         fid: 1,
        //         url: 'http://attachments.gfan.com/forum/attachments2/201303/22/105956sdsnnsqjv4ts8ng4.jpg'
        //     },
        //     {
        //         fid: 1,
        //         url: 'http://www.deskcar.com/desktop/fengjing/20143800316/5.jpg'
        //     },
        //     {
        //         fid: 1,
        //         url: 'http://attachments.gfan.com/forum/attachments2/day_100828/1008282210aa9468b908940c6c.jpg'
        //     },
        //     {
        //         fid: 1,
        //         url: 'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1212/05/c1/16366597_1354692861079.jpg'
        //     }
        // ]

    async componentDidMount() {
        let result = await getBanner().then(resp =>resp.content); 
        this.setState({
            imgList: result
        })
    }

    render() {
        // console.log(this.state.imgList);
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 8000,
            cssEase: "linear",
            arrows: false
        };

        const dom = this.state.imgList.map((item) => {
            return (
                <div key={item.fid} className={styles.sliderItem} >
                    {/* 修改img.url */}
                    <img src={item.url} className={styles.img} />
                </div>
            )
        });

        return (
            <div className={styles.container}>
                <Slider {...settings}>
                    {dom}
                </Slider>
            </div>
        );
    }
}