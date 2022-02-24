/**
 * title: 添加主页轮播图图片
 * 
 * Routes:
 *      - src/router/PrivateRouter
 */

import React, { Component } from 'react'
import AddBannerForm from '../../../components/AddBannerForm';

export default class AddBanner extends Component {
    render() {
        return (
            <div>
                <AddBannerForm />
            </div>
        )
    }
}
