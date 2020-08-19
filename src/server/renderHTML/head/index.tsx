import React from 'react';

type HeadPropsType = {
    title: string;
    children?: JSX.Element | Array<JSX.Element>
}

const Head = (props: HeadPropsType): JSX.Element => {
  const {
    title, children,
  } = props;
  const renderTitle = () => <title>{title}</title>;
  const renderStyle = () => <link rel="stylesheet" href="style.css" />;
  return (
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {renderTitle()}
      {renderStyle()}
      {children}
    </head>
  );
};

export default Head;
