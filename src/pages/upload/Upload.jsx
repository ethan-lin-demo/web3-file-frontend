import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload as AntdUpload } from 'antd';

const { Dragger } = AntdUpload;

function Upload() {
  const onChange = (info) => {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file.response);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <Dragger name="file" action={'https://localhost:3003/upload'} onChange={onChange} multiple>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload.
      </p>
    </Dragger>
  );
}

export default Upload;
