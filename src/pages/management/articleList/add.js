/**
 * title: 添加文章
 * 
 * Routes:
 *      - src/router/PrivateRouter
 */

import React, { Component } from 'react'
import ArticleForm from '../../../components/ArticleForm';

export default class Add extends Component {
    render() {
        return (
            <div>
                <ArticleForm />
            </div>
        )
    }
}

