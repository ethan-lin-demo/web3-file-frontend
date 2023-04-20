import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Layout } from 'antd';

const { Content, Footer } = Layout;

function Frame({ children }) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content className="site-layout" style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }} />
        <div style={{ padding: 24, minHeight: 380, textAlign: 'center' }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }} />
    </Layout>
  );
}

Frame.propTypes = {
  children: PropTypes.node,
};

Frame.defaultProps = {
  children: <div />,
};

export default Frame;
