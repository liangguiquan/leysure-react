import React, { useState, useEffect } from 'react';
import { Upload, Button, Spin, Icon } from 'antd';
import styles from './index.css';

function UploadVideo({ value, onChange }, ref) {
    // value表示文件

    const [loading, setLoading] = useState(false);
    const [fileUrl, setFileUrl] = useState('');
    const baseUrl = 'http://furniture.flydevp.com';

    // console.log(value);
    // console.log(fileUrl);

    /**
     * 根据文件id得到文件url
     * @param {*} file 
     */
    async function getfileUrl(value) {
        if (value && value.id) {
            // console.log(value.id);
            const result = await fetch(`/api-common/file/get_file/id/${value.id}`).then(res => res.json()).then(res => res.content);
            // console.log(baseUrl + result);
            setFileUrl(baseUrl + result);
        }
    }

    /**
     * 根据文件地址渲染dom
     * @param {*} file 
     */
    function getContent(value) {
        getfileUrl(value);
        if (fileUrl) {
            return <div className={styles.videoWrapper}>
                <video src={fileUrl} className={styles.video} controls ></video>
            </div>
        }
    }

    return (
        <>
            <Upload
                action='/api-common/file/upload'  // 文件上传的地址
                ref={ref}
                listType='picture-card'
                showUploadList={false}
                name='files'
                beforeUpload={() => {
                    setLoading(true);
                }}
                onChange={(data) => {
                    // console.log(data);
                    if (data.file && data.file.response && data.file.response.content) {
                        // 服务器完成了响应
                        data.file.id = data.file.response.content[0];
                        // console.log(data.file);
                        onChange && onChange(data.file); // 修改value
                        setLoading(false);
                    }

                }}
            >
                <Button icon='upload'>上传视频</Button>
            </Upload>
            <Spin spinning={loading}>
                {value ? getContent(value) : ''}
            </Spin>
        </>
    )
}

export default React.forwardRef(UploadVideo);
