import React, { useState, useEffect } from 'react';
import { Upload, Button, Spin, Icon } from 'antd';
import styles from './index.css';

function UploadPoster({ value, onChange }, ref) {

    const [loading, setLoading] = useState(false);
    const [fileUrl, setFileUrl] = useState('');
    const baseUrl = 'http://zhouanbin.com';

    // console.log(value);
    // console.log(fileUrl);

    /**
    * 根据文件id得到文件url
    * @param {*} file 
    */
    async function getfileUrl(value) {
        if(value && value.id){
            // console.log(value.id);
            const result = await fetch(`/api-common/file/get_file/id/${value.id}`).then(resp => resp.json()).then(resp => resp.content);
            setFileUrl(baseUrl + result);
            // console.log(result);
            return result;
        }  
    }

    function getContent(value) {
        getfileUrl(value);
        if (fileUrl) {
            return <img src={fileUrl} className={styles.posterImg} alt='' />
        }
        else {
            return <Button icon='upload'>上传图片</Button>
        }
    }


    return (
        <Upload
            ref={ref}
            listType='picture-card'
            showUploadList={false}
            action='/api-common/file/upload'  // 文件上传的地址
            name='files'
            beforeUpload={() => {
                setLoading(true);
            }}
            onChange={(data) => {
                if (data.file.response && data.file.response.content) {
                    // 服务器完成了响应
                    // console.log(data.file);
                    data.file.id = data.file.response.content[0];
                    onChange && onChange(data.file);
                    setLoading(false);
                }
            }}
        >
            <Spin spinning={loading}>
                <div className={styles.poster}>
                    {getContent(value)}
                </div>
            </Spin>
        </Upload>
    )
}


export default React.forwardRef(UploadPoster);