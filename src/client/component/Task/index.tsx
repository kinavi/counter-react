import { WithMode } from './hocs/WithMode';
import { ViewMode } from './chunks/ViewMode';
import { EditMode } from './chunks/EditMode';
import { WithTracks } from './hocs/WithTracks';
import './style/index.sass';

export const Task = WithTracks(WithMode({
  view: ViewMode,
  edit: EditMode,
}));
