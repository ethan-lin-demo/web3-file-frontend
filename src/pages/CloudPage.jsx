import React from 'react';
import PropTypes from 'prop-types';
import Login from './cloud/Login';
import Clouds from './cloud/Clouds';
import Detail from './cloud/Detail';
import Frame from '../components/Frame';
import CloudContainer from '../containers/Cloud';

function CloudPage({ route }) {
  const routes = {
    '': <Login />,
    clouds: <Clouds />,
    detail: <Detail />,
  };

  return (
    <Frame>
      <CloudContainer>
        {routes[route]}
      </CloudContainer>
    </Frame>
  );
}

CloudPage.propTypes = {
  route: PropTypes.string,
};

CloudPage.defaultProps = {
  route: '',
};

export default CloudPage;
