import React from 'react'
import FrontLayout from '../components/FrontLayout'
import Header from '../components/Header'
import Footer from '../components/Footer'

function BasicLayout(props) {

  // props.children就是pages文件夹中的页面
  
  if (props.location.pathname.includes('/management')) {
    // 后台管理页面
    // console.log(props);
    return props.children;
  }
  else {
    return (
      <FrontLayout
        header={<Header />}
        main={<>
          {props.children}
        </>}
        footer={<Footer/>}
      />
    )
    // 前端页面
  }

}

export default BasicLayout;

