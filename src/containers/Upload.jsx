import React, {
  useState, useCallback, useMemo,
} from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import cloud from '../api/cloud';

export const Context = React.createContext();

function UploadContainer({ children }) {
  const [data, setData] = useState({});
  const [fetching, setIsFetching] = useState(false);
  const fetchData = useCallback(async (apiName, fetcher, params) => {
    if (fetching) {
      return;
    }
    setIsFetching(true);
    try {
      const response = await fetcher(params);
      setData({
        ...data,
        ...{ [apiName]: response.data },
      });
    } catch (e) {
      Modal.error({
        title: 'error',
        content: `${e}`,
      });
    }
    setIsFetching(false);
  });
  const fetcher = Object.keys(cloud).map(
    (key) => ({ [`${key}Api`]: (params) => fetchData(key, cloud[key], params) }),
  ).reduce((a, b) => ({
    ...a,
    ...b,
  }));

  return (
    <Context.Provider
      value={useMemo(() => ({
        ...data,
        ...fetcher,
        fetching,
      }), [data, fetcher, fetching])}
    >
      { children }
    </Context.Provider>
  );
}

UploadContainer.propTypes = {
  children: PropTypes.node,
};

UploadContainer.defaultProps = {
  children: <div />,
};

export default UploadContainer;
