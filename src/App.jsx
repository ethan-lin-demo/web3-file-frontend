import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { loader } from '@monaco-editor/react';
import { ConfigProvider, theme } from 'antd';
import MainMenu from './pages/MainMenu';
import MainPage from './pages/MainPage';
import useTheme from './hooks/localStorage';
import './App.css';

loader.config({ paths: { vs: '/monaco-editor/min/vs' } });

function App() {
  const { localTheme, setLocalTheme } = useTheme();
  const routes = ['', 'upload'];

  return (
    <div className="App">
      <ConfigProvider
        theme={{
          algorithm: localTheme ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        <BrowserRouter>
          <MainMenu localTheme={localTheme} setLocalTheme={setLocalTheme} />
          <Routes>
            {routes.map((route) => (
              <Route
                path={`/${route}`}
                element={<MainPage route={route} />}
                key={`___${route}`}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </div>
  );
}

export default App;
