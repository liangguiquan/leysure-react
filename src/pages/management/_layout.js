import React from 'react';
import Layout from '../../components/BehindLayout';
import BehindHeader from "../../components/BehindHeader";
import Aside from "../../components/Aside";

export default function _layout(props) {
    // console.log(props);
    if (props.location.pathname === "/management/login") {
        //登录页
        return props.children;
    }
    else {
        return <Layout
            header={<BehindHeader />}
            aside={<Aside />}
            main={<div style={{padding:'30px'}}>
                {props.children}
            </div>}
        />
    }
}


