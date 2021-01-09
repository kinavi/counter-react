import { renderToString } from 'react-dom/server';
import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import { Html } from './views/html';
import { AppWithState } from '../../client/container/App';
import { AuthentionPageWithState } from '../../client/pages/Authention';
import { Order } from '../../client/pages/Order';

const sheet = new ServerStyleSheet();

export class Views {
  static renderMainPage(store: any, url: string) {
    return renderToString(sheet.collectStyles(
      <Html styleTags={sheet.getStyleTags()}>
        <Provider store={store}>
          <StaticRouter location={url}>
            <AppWithState />
          </StaticRouter>
        </Provider>
      </Html>,
    ));
  }

  static renderAuthForm(store: any, url: string) {
    return renderToString(sheet.collectStyles(
      <Html styleTags={sheet.getStyleTags()}>
        <Provider store={store}>
          <StaticRouter location={url}>
            <AuthentionPageWithState />
          </StaticRouter>
        </Provider>
      </Html>,
    ));
  }

  static renderOrderPage(store: any, url: string) {
    return renderToString(sheet.collectStyles(
      <Html styleTags={sheet.getStyleTags()}>
        <Provider store={store}>
          <StaticRouter location={url}>
            <Order />
          </StaticRouter>
        </Provider>
      </Html>,
    ));
  }
}
