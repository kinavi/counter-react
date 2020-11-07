import React, { useEffect } from 'react';
// import { useSpring, animated, useTransition } from 'react-spring';
import { connect } from 'react-redux';
import { IState, ITask } from '../redux/types';
import * as Actions from '../redux/action';
import { CreateTask } from '../component/CreateTask';
import { Clock } from '../component/Clock';
import { Task } from '../component/Task';
import { Icons } from '../component/UI/Icons';

type AppStatePropsType = {
  tasks: ITask[];
}

type AppPropsType = typeof Actions & AppStatePropsType

const App = (props: AppPropsType): JSX.Element => {
  const {
    initialApp,
    tasks,
    addTask,
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
      <div className="app__control-panel">
        <CreateTask
          onCreateTask={addTask}
        />
      </div>
      <div className="app__tasks-group">
        {tasks.map((task) => (
          <Task
            key={task.id}
            {...task}
            leftIcon={Icons.note}
            rightIcon={Icons.play}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: IState): AppStatePropsType => ({
  tasks: state.tasks,
});

export const AppWithState = connect(mapStateToProps, { ...Actions })(App);
