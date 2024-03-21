import './styles/index.scss';

import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Movies from 'pages/Movies';

import store from 'store';
import { isElectron } from 'utils/helpers';
import routes, { Paths } from 'utils/routes';

const App = () => {
  const Router = isElectron() ? HashRouter : BrowserRouter;

  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div />}>
          <div className="app">
            <div className="app-container">
              <Routes>
                <Route path={Paths.empty} element={<Movies />} />
                {routes.map(({ id, path, Component }) => (
                  <Route key={id} path={path} element={<Component />} />
                ))}
              </Routes>
            </div>
          </div>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
