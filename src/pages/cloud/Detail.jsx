import React, { useContext, useState } from 'react';
import { Typography, Button, Input } from 'antd';
import Editor from '@monaco-editor/react';
import { Context } from '../../containers/Cloud';

const { Title } = Typography;
const { TextArea } = Input;

function Detail() {
  const [url, setUrl] = useState(new URL(window.location.href).searchParams.get('server'));
  const [code, setCode] = useState(`try:
  returnExec=str(bot).encode()
except Exception as e:
  returnExec=str(e).encode()`);
  const {
    execute,
    executeApi,
    fetching,
  } = useContext(Context);
  return (
    <>
      <Title>{ new URL(window.location.href).searchParams.get('key') }</Title>
      <Input style={{ marginBottom: '9px' }} value={url} onChange={(evn) => setUrl(evn.target.value)} />
      <Editor
        height="30vh"
        language="python"
        theme="vs-dark"
        value={code}
        onChange={setCode}
      />
      <Button
        style={{ margin: '9px' }}
        onClick={() => executeApi({
          code,
          url,
        })}
        loading={fetching}
      >
        EXEC
      </Button>
      <TextArea
        value={execute}
      />
    </>
  );
}

export default Detail;
