import React from 'react';
import Head from './head';
import Body from './body';
import { HtmlPropsType } from './types';

export const Html = (props: HtmlPropsType): JSX.Element => {
  const {
    children, styleTags,
  } = props;
  return (
  // <!DOCTYPE html>
    <html lang="en">
      <Head
        title="Hello"
        style={styleTags}
      />
      <Body reactId="root">
        {children}
      </Body>
    </html>
  );
};
