import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IState } from '../redux/types';
import * as ActionsCreator from '../redux/actions/ActionsCreator';
import * as ThunkActions from '../redux/actions/ThunkActions';
import { CreateTask } from '../component/CreateTask';
import { Clock } from '../component/Clock';
import { Task } from '../component/Task';
import { Loader } from '../component/UI/Loader';
import { AppPropsType, AppStatePropsType } from './types';

const App = (props: AppPropsType): JSX.Element => {
  const {
    isLoading,
    isReady,
    initialApp,
    tasks,
    updateTask,
    submitCreateTask,
    submitUpdateTask,
    submitRemoveTask,
    submitStartTrack,
    submitStopTrack,
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
    <div className="app__container">
      <Clock />
      {isLoading && <Loader />}
      {isReady
      && (
      <>
        <div className="app__tasks-group">
          {tasks.map((task) => (
            <Task
              mix="app__task"
              key={task.id}
              {...task}
              onChange={updateTask}
              onSave={() => submitUpdateTask(task)}
              onRemove={() => submitRemoveTask(task.id)}
              onPlay={() => submitStartTrack(task.id)}
              onStop={(id: string) => submitStopTrack(id)}
            />
          ))}
        </div>
        <div className="app__control-panel">
          <CreateTask
            onCreate={submitCreateTask}
          />
        </div>
      </>
      )}
    </div>
  );
};

const mapStateToProps = (state: IState): AppStatePropsType => ({
  tasks: state.tasks,
  isLoading: state.app.status === 'loading' || state.app.status === 'initial',
  isReady: state.app.status === 'ready',
});

export const AppWithState = connect(
  mapStateToProps,
  { ...ThunkActions, ...ActionsCreator },
)(App);
