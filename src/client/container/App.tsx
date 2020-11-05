import React, { useEffect, useState } from 'react';
// import { useSpring, animated, useTransition } from 'react-spring';
import { connect } from 'react-redux';
import { ITrack } from '../component/types';
import { IState } from '../redux/types';
import * as Actions from '../redux/action';

type AppStatePropsType = {

}

type AppPropsType = typeof Actions & AppStatePropsType
const App = (props: AppPropsType): JSX.Element => {
  const {
    initialApp,
  } = props;
  // const [showModal, setShowModal] = useState(false);
  // const [isRegisterForm, setIsRegisterForm] = useState(true);
  // const test = useSpring({
  //   perspective: '600px',
  //   transform: showModal ? 'rotateY(0deg)' : 'rotateY(180deg)',
  // });
  // const testTrans = useTransition(showModal, null, {
  //   from: { position: 'absolute', transform: 'rotateY(180deg)' },
  //   enter: { transform: 'rotateY(0deg)' },
  //   leave: { transform: 'rotateY(180deg)' },
  //   // trail: 2000,
  //   // config: { duration: 500 },
  // });
  // const test2 = useSpring({
  //   opacity: showModal ? 0 : 1,
  // });
  useEffect(() => {
    initialApp();
  }, []);
  return (
    <div>Hello</div>
  );
};

// const mapStateToProps = (state: IState): AppStatePropsType => {
//   console.log('state', state);
//   return {
//     errors: state.app.form.error,
//     fields: state.app.form.fields,
//   };
// };

export const AppWithState = connect(null, { ...Actions })(App);
