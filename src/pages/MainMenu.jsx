import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Switch, Menu } from 'antd';
import PropTypes from 'prop-types';

function MainMenu({ localTheme, setLocalTheme }) {
  const navigate = useNavigate();
  return (
    <Menu
      mode="horizontal"
      items={[
        {
          key: 'switch-theme',
          disabled: true,
          label: (
            <Switch
              checked={localTheme}
              checkedChildren="🌙"
              unCheckedChildren="☀️"
              onChange={(value) => setLocalTheme(value)}
            />
          ),
        },
        {
          key: 'upload',
          label: (
            <Menu.Item>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/upload');
                }}
                href="#clouds"
              >
                Clouds
              </a>
            </Menu.Item>
          ),
        },
      ]}
    />
  );
}

MainMenu.propTypes = {
  localTheme: PropTypes.bool,
  setLocalTheme: PropTypes.func,
};

MainMenu.defaultProps = {
  localTheme: true,
  setLocalTheme: () => {},
};

export default MainMenu;
