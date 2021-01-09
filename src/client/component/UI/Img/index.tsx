import dZtech from './images/1420ztech.png';
import mZtech from './images/375ztech.png';
import tZtech from './images/768ztech.png';
import { getStaticPath } from '../../../constants';

export const IMG = {
  ztech: {
    mobilePreview: getStaticPath(mZtech),
    tabletPreview: getStaticPath(tZtech),
    desktopPreview: getStaticPath(dZtech),
  },
};
