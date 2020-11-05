import React from 'react';

import Head from './head';
import Body from './body';

type HtmlPropsType = {
    children?: JSX.Element | Array<JSX.Element>
}

const Html = (props: HtmlPropsType): JSX.Element => {
  const {
    children,
  } = props;
  return (
  // <!DOCTYPE html>
    <html lang="en">
      <Head title="Hello" />
      <Body reactId="root">
        {children}
      </Body>
    </html>
  );
};

export default Html;
