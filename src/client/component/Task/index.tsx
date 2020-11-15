import { WithMode } from './hocs/WithMode';
import { ViewMode } from './chunks/ViewMode';
import { EditMode } from './chunks/EditMode';
import { CreateMode } from './chunks/CreateMode';

import './style/index.sass';

export const Task = (
  WithMode({
    view: ViewMode,
    edit: EditMode,
    create: CreateMode,
  })
);
