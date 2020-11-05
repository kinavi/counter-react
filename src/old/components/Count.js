import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ProgressBarCount } from './ProgressBarCount';
import { useInterval } from '../hooks/useInterval';
import { stopCounter, startCounter } from '../redux/actions';
import { ButtonPlay, ButtonStop } from './UI';

// eslint-disable-next-line react/prop-types
const Count = ({
  storys, _id, name, value, onStop, onPlay,
}) => {
  const [_value, setValue] = useState(value);
  const [delay] = useState(1000);
  const [isRun, setRun] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const story = getActiveStory();
    if (story) {
      onСontinue(story.dateStart);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useInterval(() => {
    // Your custom logic here
    setValue(_value + 1);
  }, isRun ? delay : null);

  const playHandler = (e) => {
    setRun(true);
    onPlay(_id, new Date());
    e.stopPropagation();
  };

  const stopHandler = (e) => {
    setRun(false);
    onStop(_id, getActiveStory()._id, _value, new Date());
    e.stopPropagation();
  };

  const clickHandler = (e) => {
    history.push(`/${_id}`);
    e.stopPropagation();
  };

  const onСontinue = (lastDate) => {
    setValue(getTotalCount(_value, getLastCount(lastDate)));
    setRun(true);
  };

  const getActiveStory = () => storys.find((it) => (it.idCount == _id) && (it.isActive));

  const getLastCount = (lastDate) => Math.round((new Date() - new Date(lastDate)) / 1000);

  const getTotalCount = (count, lastCount) => +count + lastCount;

  return (
    <div className="timer " onClick={clickHandler}>
      <span className="title">
        {name}
      </span>
      <ProgressBarCount count={_value} />
      <div className="btn-start-timer">
        {(isRun)
          ? <ButtonStop onClick={stopHandler} />
          : <ButtonPlay onClick={playHandler} />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  storys: state.story,
});

const mapDispatchToProps = (dispatch) => ({
  onStop: (idCount, idStory, value, dateStop) => {
    dispatch(stopCounter(idCount, idStory, value, dateStop));
  },
  onPlay: (idCount, dateStart) => {
    dispatch(startCounter(idCount, dateStart));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Count);
