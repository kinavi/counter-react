import React, { useState } from 'react';
import classnames from 'classnames';
import { WithModePropsType, WithTracksPropsType } from '../types';
import { Track } from '../../Track';

export const WithTracks = (
  Component: (props: WithModePropsType) => JSX.Element,
) => (props: WithTracksPropsType) => {
  const {
    tracks, mix, isReadonly, ...componentProps
  } = props;

  const [isShowTracks, setIsShowTracks] = useState(false);

  return (
    <div
      className={classnames(mix, 'task__container')}
      onClick={() => setIsShowTracks(!isShowTracks)}
    >
      <div className="task__body">
        <Component isReadonly={isReadonly} {...componentProps} tracks={tracks} />
      </div>
      { isReadonly
      && isShowTracks
      && tracks.map((track) => (
        <Track
          key={`track-item_${track.id}`}
          {...track}
        />
      ))}
    </div>
  );
};
