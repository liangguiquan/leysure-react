
import React, { Component } from 'react'
import { Form, Button, Spin, message } from 'antd'
import { addBanner, getBanner } from '../../services/banner'
import withRouter from 'umi/withRouter'
import UploadPictures from '../UploadPictures'
import styles from './index.css'

function getFieldsConfig(obj) {
    const result = {};
    for (const prop in obj) {
        result[prop] = Form.createFormField({
            value: obj[prop]
        })
    }
    return result;
}

function getUid(){
    let str = '';
    for (let i = 0; i < 8; i++) {
        str += Math.floor(Math.random() * 10);
    }
    return str;
}

class ArticleForm extends Component {

    state = {
        isLoading: false
    }

    async componentDidMount() {
            this.setState({
                isLoading: true
            })
            let resp = await getBanner().then(resp =>resp.content); 
            let result = resp.map((item)=>{
                return {
                    id: item.fid,
                    uid:getUid(),
                    url: item.url,
                    status: 'done'
                }
            })
            let data = {
                banner_img: result
            }
            // 设置表单的值
            this.props.form.setFields(getFieldsConfig(data));
            this.setState({
                isLoading: false
            })
    }

    async add(arr) {
        this.setState({
            isLoading: true
        })
        console.log(arr);
        const resp = await addBanner(arr);
        console.log(resp);
        if (resp.code === 0) {
            // 先给提示
            await message.success('上传成功!', 1);
        }
        else {
            // 给提示
            // message.error(resp.message, 3);
            message.error("上传失败", 3);
        }
        this.setState({
            isLoading: false
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.props.form.getFieldsValue());
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // 验证通过
                console.log(values);
                const bannerImgs = values.banner_img;
                let arr = bannerImgs.map(item => {
                    return +item.id;
                })
                // 添加banner图片
                this.add(arr);
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <>
                <Spin tip='请稍后...' spinning={this.state.isLoading}>
                    <Form onSubmit={this.handleSubmit} className={styles.form}>
                        <Form.Item label='主页轮播图'>
                            {getFieldDecorator('banner_img')(<UploadPictures />)}
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType='submit' type='primary'>提交</Button>
                        </Form.Item>
                    </Form>
                </Spin>
            </>
        )
    }
}

const HOC = Form.create();
export default withRouter(HOC(ArticleForm));
