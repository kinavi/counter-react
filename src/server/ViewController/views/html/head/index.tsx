import React from 'react';
import { HeadPropsType } from './types';

const Head = (props: HeadPropsType): JSX.Element => {
  const {
    title, children, style,
  } = props;
  const renderTitle = () => <title>{title}</title>;
  const renderStyle = () => <link rel="stylesheet" href="/static/style.css" />;

  return (
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://fonts.googleapis.com/css?family=Quantico&display=swap" rel="stylesheet" />
      {renderTitle()}
      {renderStyle()}
      <style>
        {style}
      </style>
      {children}
    </head>
  );
};

export default Head;
