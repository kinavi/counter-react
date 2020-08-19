import React from 'react';
import { TrackPropsType } from '../types';
import Button from '../UI/Button';
import Icons from '../UI/Icons';

const Track = (props: TrackPropsType): JSX.Element => {
  const {
    id, label, value, // dateStart, dateStop,
  } = props;
  const renderName = () => <div className="track__label">{label}</div>;
  const renderValue = () => <div className="track__value">{value}</div>;
  const renderControll = () => (
    <div className="track__controll-group">
      <Button label={Icons.play} />
    </div>
  );
  return (
    <div className="timer__track track">
      {renderName()}
      {renderValue()}
      {renderControll()}
    </div>
  );
};

export default Track;
