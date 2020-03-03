import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {ProgressBarCount} from './ProgressBarCount';
import {useInterval} from '../hooks/useInterval';
import {stopTimer, startTimer} from '../redux/actions';
import {ButtonPlay, ButtonStop} from './UI';

// eslint-disable-next-line react/prop-types
const Count = ({storys, _id, name, count, onStop, onPlay}) =>{
  const [_count, setCount] = useState(count);
  const [delay] = useState(1000);
  const [isRun, setStateRun] = useState(false);

  const history = useHistory();

  useEffect(()=>{
    const story = getActiveStory();
    if (story) {
      onСontinue(story.dateStart);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useInterval(() => {
    // Your custom logic here
    setCount(_count + 1);
  }, isRun ? delay : null);

  const playHandler = (e) =>{
    setStateRun(true);
    onPlay(_id, new Date());
    e.stopPropagation();
  };

  const stopHandler = (e) =>{
    setStateRun(false);
    onStop(_id, getActiveStory()._id, _count, new Date());
    e.stopPropagation();
  };

  const clickHandler = (e) =>{
    history.push(`/${_id}`);
    e.stopPropagation();
  };

  const onСontinue = (lastDate) =>{
    setCount(getTotalCount(_count, getLastCount(lastDate)));
    setStateRun(true);
  };

  const getActiveStory = () =>
    storys.find((it) =>(it.idTimer==_id)&&(it.isActive));

  const getLastCount = (lastDate) =>
    Math.round((new Date() - new Date(lastDate))/1000);

  const getTotalCount = (count, lastCount) =>
    +count+lastCount;

  return (
    <div className='timer ' onClick={clickHandler}>
      <span className='title'>
        {name}
      </span>
      <ProgressBarCount count={_count}/>
      <div className='btn-start-timer'>
        {(isRun)?
          <ButtonStop onClick={stopHandler}/>:
          <ButtonPlay onClick={playHandler}/>}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>({
  onStop: (id, idStory, count, dateStop) =>{
    dispatch(stopTimer(id, idStory, count, dateStop));
  },
  onPlay: (id, dateStart) =>{
    dispatch(startTimer(id, dateStart));
  },
});

const mapStateToProps = (state) =>({
  storys: state.story,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Count);
