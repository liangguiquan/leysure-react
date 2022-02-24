/**
 * title: 修改文章
 * 
 * Routes:
 *      - src/router/PrivateRouter
 */


import ArticleForm from '../../../components/ArticleForm';
import React, { Component } from 'react';

export default class add extends Component {

    componentDidMount(){
        // console.log(this.props, this.props.match.params.sNo);
    }
    
    render() {
        return (
            <div>
                <ArticleForm sNo={this.props.match.params.sNo} />
            </div>
        )
    }
}