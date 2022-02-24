import React, { Component } from 'react'
import styles from './index.css'

export default class DetailsVideo extends Component {

    componentDidMount(){
        // console.log(this.props);
    }
    render() {
        return (
            <div className={styles.videoWrapper}>
                <div className={styles.item}>
                    <video controls className={styles.video} src={this.props.src}></video>
                </div>
            </div>
        )
    }
}