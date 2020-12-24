import { renderToString } from 'react-dom/server';
import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import Html from './views/html';
import { AppWithState } from '../../client/container/App';
import { AuthentionPageWithState } from '../../client/pages/Authention';

export const VIEWS = {
  renderMainPage: (store: any, url: string) => renderToString(
    <Html>
      <Provider store={store}>
        <StaticRouter location={url}>
          <AppWithState />
        </StaticRouter>
      </Provider>
    </Html>,
  ),

  renderAuthForm: (store: any, url: string) => renderToString(
    <Html>
      <Provider store={store}>
        <StaticRouter location={url}>
          <AuthentionPageWithState />
        </StaticRouter>
      </Provider>
    </Html>,
  ),

  renderTestPage: () => renderToString(
    <Html>
      <div>Test</div>
    </Html>,
  ),
};
