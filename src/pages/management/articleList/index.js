 /**
 * title: 文章列表
 * 
 * Routes:
 *      - src/router/PrivateRouter
 */

import React from 'react';
import ArticleTable from '../../../components/ArticleTable';

export default function index() {
    return (
        <div>
            <ArticleTable />
        </div>
    )
}
