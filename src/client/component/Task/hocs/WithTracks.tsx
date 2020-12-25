import React, { useState } from 'react';
import classnames from 'classnames';
import { WithModePropsType, WithTracksPropsType } from '../types';
import { Track } from '../../Track';

export const WithTracks = (
  Component: (props: WithModePropsType) => JSX.Element,
) => (props: WithTracksPropsType) => {
  const {
    tracks, mix, isReadonly, onStop, ...componentProps
  } = props;

  const [isShowTracks, setIsShowTracks] = useState(false);

  return (
    <div
      className={classnames(
        'task__container',
        mix,
      )}
    >
      <Component
        {...componentProps}
        tracks={tracks}
        isReadonly={isReadonly}
        onClick={() => setIsShowTracks(!isShowTracks)}
      />
      { isReadonly
      && isShowTracks
      && tracks.map((track) => (
        <Track
          key={`track-item_${track.id}`}
          onStop={() => onStop(track.id)}
          {...track}
        />
      ))}
    </div>
  );
};
