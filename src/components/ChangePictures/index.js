
import React, { Component } from 'react'
import { Form, Button, Spin, message, Input, Select } from 'antd'
import { setPicture, getPicture } from '../../services/pictures'
import withRouter from 'umi/withRouter'
import UploadPoster from '../UploadPoster'
import styles from './index.css'

const { TextArea } = Input;
const { Option } = Select;


class ArticleForm extends Component {

    state = {
        isLoading: false,
        imgList: []
    }

    async componentDidMount() {
        this.setState({
            isLoading: true
        })
        const result = await getPicture().then(resp => resp.content);
        console.log(result);

        this.setState({
            imgList: result,
            isLoading: false
        })
    }

    async add(obj) {
        this.setState({
            isLoading: true
        })
        console.log(obj);
        const resp = await setPicture(parseInt(obj.cid), obj.desc, parseInt(obj.cover_id));
        console.log(resp);
        if (resp.code === 0) {
            await message.success('上传成功!', 1);
            const result = await getPicture().then(resp => resp.content);
            this.setState({
                imgList: result
            })
        }
        else {
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
                const data = {
                    cid: values.cid,
                    desc: values.desc,
                    cover_id: values.picture.id
                };
                this.add(data);
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const sel = <Select>
            <Option value="1">新闻</Option>
            <Option value="2">报道</Option>
            <Option value="3">家具</Option>
            <Option value="4">家居</Option>
            <Option value="5">灯具</Option>
            <Option value="6">室内</Option>
            <Option value="7">定制</Option>
        </Select>;
        return (
            <>
                <Spin tip='请稍后...' spinning={this.state.isLoading}>
                    <Form onSubmit={this.handleSubmit} className={styles.form}>
                        <Form.Item label='类别名称'>
                            {getFieldDecorator('cid')(sel)}
                        </Form.Item>
                        <Form.Item label='分类页面大图'>
                            {getFieldDecorator('picture')(<UploadPoster />)}
                        </Form.Item>
                        <Form.Item label='文字描述'>
                            {getFieldDecorator('desc')(<TextArea />)}
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType='submit' type='primary'>提交</Button>
                        </Form.Item>
                    </Form>

                    <div className={styles.content}>
                        {
                            this.state.imgList.map(item => {
                                return (
                                    <div key={item.id} className={styles.item}>
                                        <p className={styles.name}>分类名称：{item.name}</p>
                                        <p className={styles.desc}>文字描述：{item.desc}</p>
                                        <div className={styles.imgWrapper}>
                                            <img className={styles.img} src={item.url} alt="" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </Spin>
            </>
        )
    }
}

const HOC = Form.create();

export default withRouter(HOC(ArticleForm));
