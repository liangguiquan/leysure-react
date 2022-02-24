import React, { Component } from 'react'
import styles from './index.css'

export default class DetailsBanner extends Component {

    componentDidMount(){
        // console.log(this.props);
    }
    render() {
        return (
            <div className={styles.picture}>
                <div className={styles.item}>
                    <img className={styles.img} src={this.props.src} alt=""/>
                </div>
            </div>
        )
    }
}
