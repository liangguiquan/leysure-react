/**
 * title: 添加分类图片
 * 
 * Routes:
 *      - src/router/PrivateRouter
 */

import React, { Component } from 'react'
import ChangePictures from '../../../components/ChangePictures';

export default class AddBanner extends Component {
    render() {
        return (
            <div>
                <ChangePictures />
            </div>
        )
    }
}