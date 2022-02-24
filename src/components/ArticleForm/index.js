
import React, { Component } from 'react'
import { Input, Form, Button, Select, Radio, Spin, message } from 'antd'
import { addArticle, updateArticle, getArticleBySNo } from '../../services/articles'
import withRouter from 'umi/withRouter'
import qs from 'qs'
import UploadPoster from '../UploadPoster'
import UploadPictures from '../UploadPictures'
import UploadVideo from '../UploadVideo'
import styles from './index.css'

const { TextArea } = Input;
const { Option } = Select;

function getFieldsConfig(obj) {
    const result = {};
    for (const prop in obj) {
        result[prop] = Form.createFormField({
            value: obj[prop]
        })
    }
    // console.log(result)
    return result;
}

class ArticleForm extends Component {

    state = {
        isLoading: false,
        id: ''
    }

    async componentDidMount() {
        if (this.props.sNo) {
            // 修改
            this.setState({
                isLoading: true
            })
            const resp = await getArticleBySNo(this.props.sNo); 
            let art = JSON.parse(resp);
            // console.log(art);
            this.setState({
                id: art.id && art.id
            })
            // 设置表单的值
            delete art.id; // 删除一些多余的数据，不然对应不上
            delete art.ctime;
            delete art.posterSize;
            this.props.form.setFields(getFieldsConfig(art));
            this.setState({
                isLoading: false
            })
            // console.log(art);
        }
    }

    async add(artObj) {
        this.setState({
            isLoading: true
        })
        const formData = qs.stringify({
            data: artObj
        });

        const resp = await addArticle(formData);
        // console.log(resp);
        if (resp.code === 0) {
            // 添加成功
            // 先给提示
            await message.success('上传成功!', 1);
            // 跳转页面，文章查询页
            this.props.history.push('/management/articleList');
        }
        else {
            // 先给提示
            // message.error(resp.message, 3);
            message.error("上传失败", 3);
            this.setState({
                isLoading: false
            })
        }
    }

    async update(id, artObj) {
        this.setState({
            isLoading: true
        })
        const resp = await updateArticle(id, artObj);
        if (resp.code === 0) {
            await message.success('修改成功！', 1);
            // 跳转页面，文章查询页
            this.props.history.push('/management/articleList');
        }
        else {
            // 先给提示
            message.error(resp.message, 3);
            this.setState({
                isLoading: false
            })
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();  // 阻止表单默认行为
        // console.log(this.props.form.getFieldsValue());
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // 验证通过
                // console.log(values);
                const newValues = {
                    "s_no": values.s_no,
                    "title": values.title,
                    "description": values.description,
                    "tag": values.tag,
                    "size": values.size,
                    "banner_img": values.banner_img.map(item => {
                        return +item.id
                    }),
                    "poster": +values.poster.id,
                }
                // 有视频的时候，video字段才加入
                if (values.video_src) {
                    newValues.video_src = values.video_src.id && values.video_src.id;
                }
                // console.log(newValues);
                if (this.props.sNo) {
                    // 修改文章内容
                    this.update(this.state.id, newValues);
                }
                else {
                    // 添加文章
                    this.add(newValues);
                }
            }
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const sel = <Select>
            <Option value="新闻 News">新闻</Option>
            <Option value="报道 Press">报道</Option>
            <Option value="家具 Furniture">家具</Option>
            <Option value="家居 Household">家居</Option>
            <Option value="灯具 Lighting">灯具</Option>
            <Option value="室内 Interior Design">室内</Option>
            <Option value="定制 Custom">定制</Option>
        </Select>;
        return (
            <>
                <Spin tip='请稍后...' spinning={this.state.isLoading}>
                    <Form onSubmit={this.handleSubmit} className={styles.form}>
                        <Form.Item label='编号' >
                            {getFieldDecorator('s_no', {
                                rules: [{
                                    required: true, message: '编号必须填写',
                                    max: 10, message: '编号长度不能超过10位'
                                }]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label='标题' >
                            {getFieldDecorator('title', {
                                rules: [{
                                    required: true, message: '标题必须填写，且长度不能大于50',
                                    max: 50, message: '长度不能超过50'
                                }]
                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label='标签'>
                            {getFieldDecorator('tag', {
                                rules: [{
                                    required: true, message: '标签必须填写'
                                }]
                            })(sel)}
                        </Form.Item>
                        <Form.Item label='尺寸'>
                            {getFieldDecorator('size', {
                                rules: [{
                                    required: true, message: '尺寸必须填写'
                                }]
                            })(<Radio.Group>
                                <Radio value='small'>小</Radio>
                                <Radio value='middle'>中</Radio>
                                <Radio value='venti'>大</Radio>
                            </Radio.Group>)}
                        </Form.Item>
                        <Form.Item label='内容' >
                            {getFieldDecorator('description', {
                                rules: [{
                                    required: true, message: '内容必须填写',
                                    max: 8192, message: '长度不能超过8192'
                                }]
                            })(<TextArea maxLength={8192} className={styles.description} />)}
                        </Form.Item>
                        <Form.Item label='封面图片'>
                            {getFieldDecorator('poster')(<UploadPoster />)}
                        </Form.Item>
                        <Form.Item label='详情图片'>
                            {getFieldDecorator('banner_img')(<UploadPictures />)}
                        </Form.Item>
                        <Form.Item label='视频'>
                            {getFieldDecorator('video_src')(<UploadVideo />)}
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType='submit' type='primary'>提交{this.props.sNo ? '修改' : ''}</Button>
                        </Form.Item>

                    </Form>
                </Spin>
            </>
        )
    }
}

const HOC = Form.create();
export default withRouter(HOC(ArticleForm));
