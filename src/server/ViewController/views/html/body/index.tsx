import React from 'react';

type BodyPropsType = {
    reactId: string;
    children?: JSX.Element | Array<JSX.Element>
}

const Body = (props: BodyPropsType): JSX.Element => {
  const {
    reactId, children,
  } = props;
  const renderModule = () => <div>тут модуль</div>;
  const renderScript = () => <script src="index.js" />;

  return (
    <body>
      <div id={reactId}>
        {children}
        {/* {renderModule()} */}
        {renderScript()}
      </div>
    </body>
  );
};

export default Body;
