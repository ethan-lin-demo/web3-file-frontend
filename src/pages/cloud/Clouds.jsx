import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table } from 'antd';
import { Context } from '../../containers/Cloud';

function Clouds() {
  const navigate = useNavigate();
  const {
    clouds,
    cloudsApi,
    fetching,
  } = useContext(Context);

  const [columns, setColumns] = useState([]);

  useEffect(() => {
    cloudsApi();
  }, []);

  useEffect(() => {
    if (clouds) {
      setColumns(Object.keys(clouds[0]).map((key) => ({
        title: key,
        dataIndex: key,
        sorter: (a, b) => a[key] > b[key],
        render: key === 'key' ? (data, { server }) => (
          <a
            onClick={(e) => {
              e.preventDefault();
              navigate(`/detail?key=${data}&server=${server}`);
            }}
            href={`#${data}`}
          >
            {data}
          </a>
        ) : (data) => <a href={data}>{data}</a>,
      })));
    }
  }, [clouds]);

  return <Table columns={columns} dataSource={clouds} loading={fetching} />;
}

export default Clouds;
