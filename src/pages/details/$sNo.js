
import React from 'react';
import ArticleDetails from '../../components/ArticleDetails';

export default function $sNo(props) {
    const sNo = props.match.params.sNo;
    // console.log(props.match,sNo);
    return (
            <ArticleDetails sNo={sNo}/>
    )
}


