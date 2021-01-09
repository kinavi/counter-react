import React from 'react';
import { BodyPropsType } from './types';

const Body = (props: BodyPropsType): JSX.Element => {
  const {
    reactId, children,
  } = props;
  // const renderModule = () => <div>тут модуль</div>;
  const renderScript = () => <script src="/static/index.js" />;

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
