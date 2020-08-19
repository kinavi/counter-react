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
  return (
    <body>
      <div>server</div>
      <div id={reactId}>
        {children}
        {/* {renderModule()} */}
      </div>
    </body>
  );
};

export default Body;
