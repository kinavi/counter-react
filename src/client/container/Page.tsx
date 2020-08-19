import React from 'react';

type PagePropsType = {
    children: JSX.Element;
}

const Page = (props: PagePropsType): JSX.Element => {
  const {
    children,
  } = props;
  return (
    <div className="page">
      <div className="page__header">Header</div>
      <div className="page__body">
        {children}
      </div>
      <div className="page__footer">
        Footer
      </div>
    </div>
  );
};

export default Page;
