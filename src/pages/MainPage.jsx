import React from 'react';
import PropTypes from 'prop-types';
import Login from './upload/Login';
import Upload from './upload/Upload';
import Frame from '../components/Frame';
import UploadContainer from '../containers/Upload';

function MainPage({ route }) {
  const routes = {
    '': <Login />,
    upload: <Upload />,
  };

  return (
    <Frame>
      <UploadContainer>
        {routes[route]}
      </UploadContainer>
    </Frame>
  );
}

MainPage.propTypes = {
  route: PropTypes.string,
};

MainPage.defaultProps = {
  route: '',
};

export default MainPage;
