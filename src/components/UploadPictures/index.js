
import React, { useState, useEffect } from 'react';
import { Upload, Button, Modal } from 'antd';
import styles from './index.css';
import Base from '../../common/BaseUrl'; 

function UploadPictures({ value, onChange }, ref) {
    // value表示图片地址
    // console.log(value, onChange);

    let [fileList, setFileList] = useState([]);
    const [previewVisible, setPreviewVisible] = useState(false);  // 是否显示预览图
    const [previewImage, setPreviewImage] = useState('');   // 预览图地址
    const baseUrl = Base.baseUrl;

    useEffect(() => {
        setFileList(value);
        value && setfileListProps(value);
    }, [value]);

    // console.log(fileList);
    // console.log(value);

    /**
     * 获取所有图片的url
     * @param {*} fileList 
     */
    function setfileListProps(value) {
        for (let i = 0; i < value.length; i++) {
            // 设置url
            getfileUrl(value[i]);
            // 设置uid
            value[i].uid = value[i].uid || getUid();
            // 设置status
            value[i].status = 'done';
        }
    }

    function getUid(){
        let str = '';
        for (let i = 0; i < 8; i++) {
            str += Math.floor(Math.random() * 10);
        }
        return str;
    }

    /**
     * 根据文件id得到文件url
     * @param {*} file 
     */
    async function getfileUrl(file) {
        if (file && file.id) {
            let fileId = file.id;
            file.url = await fetch(`/api-common/file/get_file/id/${fileId}`).then(res => res.json()).then(res => baseUrl + res.content);

            // console.log(file.url);
        }
    }

    const handlePreview = (file) => {
        // console.log(file);
        if (file.url) {
            setPreviewImage(file.url);
        }
        else if (file.thumbUrl) {
            setPreviewImage(file.thumbUrl);
        }
        else {
            getfileUrl(file).then(res => setPreviewImage(res));
        }
        setPreviewVisible(true);
    }

    const handleCancel = () => {
        setPreviewVisible(false);
    }

    return (
        <>
            <Upload
                listType='picture-card'
                multiple
                ref={ref}
                showUploadList={true}
                action='/api-common/file/upload'
                name='files'
                fileList={fileList}
                onPreview={handlePreview}
                onChange={(data) => {  // {file, fileList} = data
                    for (let i = 0; i < data.fileList.length; i++) {
                        if (data.fileList[i].response && data.fileList[i].response.content) {
                            data.fileList[i].id = data.fileList[i].response.content[0];
                        }
                    }
                    // console.log(data.fileList);
                    setFileList(data.fileList);
                    setTimeout(() => { onChange && onChange(data.fileList) }, 200)
                    // onChange && onChange(data.fileList);  //有个bug，上传多张图片时会发生错误
                }}
            >
                <div className={styles.pictures}>
                    <Button icon='upload'>上传多张图片</Button>
                </div>

            </Upload>
            <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
                <img alt='' style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </>
    )
}

export default React.forwardRef(UploadPictures);











