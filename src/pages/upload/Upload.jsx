import React, { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import {
  message, Input, Image, Upload as AntdUpload,
} from 'antd';
import baseURL from '../../api/config';

const { Dragger } = AntdUpload;

function Upload() {
  const [url, setUrl] = useState(false);

  const onChange = (info) => {
    const { status } = info.file;
    if (status === 'done') {
      setUrl(info.file.response.url);
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return url ? (
    <div>
      <Input value={url} />
      <br />
      <Image src={url} />
    </div>
  ) : (
    <Dragger
      name="file"
      action={`${baseURL}upload?password=${localStorage.getItem('password')}`}
      onChange={onChange}
      multiple
    >
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
