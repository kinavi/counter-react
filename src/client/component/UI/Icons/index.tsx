import React from 'react';
import { IconContext } from 'react-icons';
import {
  FaRegArrowAltCircleLeft,
  FaRegCircle,
  FaTimesCircle,
  FaClipboardList,
} from 'react-icons/fa';
import { RiErrorWarningLine } from 'react-icons/ri';
import {
  CgProfile, CgMail, CgLock,
} from 'react-icons/cg';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { WithSize } from './hocs/WithSize';
import { Shop } from './Icons/Shop';
import { ShoppingBag } from './Icons/ShoppingBag';
import { Task } from './Icons/Task';
import { Desktop } from './Icons/Desktop';
import { LogOut } from './Icons/LogOut';
import { Phone } from './Icons/Phone';
import { Tablet } from './Icons/Tablet';
import { OrderLogo } from './Icons/OrderLogo';
import { User } from './Icons/User';

export const NoPhoto = () => (
  <svg width="160.58mm" height="103.72mm" version="1.1" viewBox="0 0 160.58 103.72" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(-21.742 -19.544)">
      <rect x="23.742" y="21.544" width="156.58" height="99.717" ry="19.3" fill="none" stroke="#6C5070" strokeLinejoin="round" strokeWidth="4" />
      <ellipse transform="scale(1,-1)" cx="58.033" cy="-53.161" rx="14.525" ry="14.062" stroke="#6C5070" />
      <path d="m43.938 119.76 36.804-45.497 12.348 19.695 32.648-42.529 34.148 68.314z" stroke="#6C5070" strokeLinejoin="round" strokeWidth="6.4" />
    </g>
  </svg>
);

const IconWithContext = (Icon: JSX.Element): JSX.Element => (
  <IconContext.Provider value={{ style: { width: '20px', height: '20px' } }}>
    {Icon}
  </IconContext.Provider>
);

const plus = () => (
  <svg className="svg" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.6607 6.16071H9.10714C8.95922 6.16071 8.83929 6.04078 8.83929 5.89286V1.33929C8.83929 0.59967 8.23962 0 7.5 0C6.76038 0 6.16071 0.59967 6.16071 1.33929V5.89286C6.16071 6.04078 6.04078 6.16071 5.89286 6.16071H1.33929C0.59967 6.16071 0 6.76038 0 7.5C0 8.23962 0.59967 8.83929 1.33929 8.83929H5.89286C6.04078 8.83929 6.16071 8.95922 6.16071 9.10714V13.6607C6.16071 14.4003 6.76038 15 7.5 15C8.23962 15 8.83929 14.4003 8.83929 13.6607V9.10714C8.83929 8.95922 8.95922 8.83929 9.10714 8.83929H13.6607C14.4003 8.83929 15 8.23962 15 7.5C15 6.76038 14.4003 6.16071 13.6607 6.16071Z" fill="black" />
  </svg>
);

const cross = () => (
  <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.0159 0.6967L6.796 3.91656C6.69141 4.02116 6.52179 4.02116 6.4172 3.91656L3.19734 0.6967C2.67435 0.173713 1.82629 0.173713 1.3033 0.6967C0.780313 1.21969 0.780313 2.06775 1.3033 2.59074L4.52316 5.8106C4.62776 5.91519 4.62776 6.08481 4.52316 6.1894L1.3033 9.40926C0.780313 9.93225 0.780313 10.7803 1.3033 11.3033C1.82629 11.8263 2.67435 11.8263 3.19734 11.3033L6.4172 8.08344C6.52179 7.97884 6.69141 7.97884 6.796 8.08344L10.0159 11.3033C10.5389 11.8263 11.3869 11.8263 11.9099 11.3033C12.4329 10.7803 12.4329 9.93225 11.9099 9.40926L8.69004 6.1894C8.58544 6.08481 8.58544 5.91519 8.69004 5.8106L11.9099 2.59074C12.4329 2.06775 12.4329 1.21969 11.9099 0.6967C11.3869 0.173713 10.5389 0.173713 10.0159 0.6967Z" fill="black" />
  </svg>
);

const note = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <path d="M12.437 3.3703L16.5054 7.43872L6.20706 17.7371L2.14091 13.6687L12.437 3.3703ZM19.5926 2.3891L17.7782 0.574722C17.077 -0.12647 15.9384 -0.12647 15.2349 0.574722L13.4969 2.31271L17.5653 6.38116L19.5926 4.35389C20.1364 3.81001 20.1364 2.93294 19.5926 2.3891ZM0.0118098 19.3872C-0.0622308 19.7204 0.238621 20.019 0.571879 19.9379L5.10549 18.8387L1.03934 14.7703L0.0118098 19.3872Z" fill="black" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>

);

const play = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.575 6.84602L1.24167 0.0960286C0.983333 -0.0344712 0.668333 -0.0314712 0.413333 0.102029C0.156667 0.237028 0 0.483028 0 0.750027V14.25C0 14.517 0.156667 14.763 0.413333 14.898C0.543333 14.9655 0.688333 15 0.833333 15C0.973333 15 1.115 14.9685 1.24167 14.904L14.575 8.15401C14.8367 8.02051 15 7.77151 15 7.50001C15 7.22852 14.8367 6.97952 14.575 6.84602Z" fill="black" />
  </svg>
);
const check = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0)">
      <path d="M5.74377 13.1036C5.60059 13.2476 5.40523 13.3279 5.20231 13.3279C4.99938 13.3279 4.80403 13.2476 4.66085 13.1036L0.336574 8.77858C-0.112191 8.32982 -0.112191 7.60212 0.336574 7.15419L0.878037 6.61259C1.32694 6.16383 2.0538 6.16383 2.50257 6.61259L5.20231 9.31247L12.4974 2.01724C12.9463 1.56847 13.6739 1.56847 14.1219 2.01724L14.6634 2.55884C15.1122 3.00761 15.1122 3.73517 14.6634 4.18323L5.74377 13.1036Z" fill="black" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="15" height="15" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const trash = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.8571 2.28572H10.8572V1.71428C10.8572 0.76751 10.0896 0 9.14287 0H6.85714C5.91037 0 5.14286 0.76751 5.14286 1.71428V2.28572H1.14285C0.827248 2.28572 0.571411 2.54156 0.571411 2.85716C0.571411 3.17276 0.827281 3.42857 1.14285 3.42857H1.76398L2.85713 15.4805C2.88409 15.7757 3.13222 16.0012 3.42857 16H12.5714C12.8678 16.0012 13.1159 15.7757 13.1429 15.4805L14.236 3.42857H14.8572C15.1728 3.42857 15.4286 3.17273 15.4286 2.85713C15.4286 2.54152 15.1727 2.28572 14.8571 2.28572ZM6.2857 1.71428C6.2857 1.39868 6.54154 1.14284 6.85714 1.14284H9.14287C9.45847 1.14284 9.71431 1.39868 9.71431 1.71428V2.28572H6.28574V1.71428H6.2857ZM12.0497 14.8571H3.95029L2.91429 3.42857H5.7143H13.0886L12.0497 14.8571Z" fill="black" />
    <path d="M6.28586 13.1046C6.28579 13.1038 6.28576 13.103 6.28569 13.1023L5.71425 5.10227C5.69185 4.78667 5.41783 4.54901 5.10227 4.57141C4.78666 4.59381 4.54901 4.86783 4.57141 5.18339L5.14285 13.1834C5.16417 13.483 5.41388 13.715 5.71428 13.7142H5.75543C6.07026 13.6924 6.30775 13.4194 6.28586 13.1046Z" fill="black" />
    <path d="M8.00003 4.57141C7.68443 4.57141 7.42859 4.82725 7.42859 5.14285V13.1428C7.42859 13.4584 7.68443 13.7143 8.00003 13.7143C8.31563 13.7143 8.57147 13.4584 8.57147 13.1428V5.14285C8.57147 4.82725 8.31563 4.57141 8.00003 4.57141Z" fill="black" />
    <path d="M10.8976 4.57141C10.582 4.54901 10.308 4.78666 10.2856 5.10227L9.71421 13.1022C9.69107 13.417 9.92746 13.6909 10.2422 13.714C10.2432 13.7141 10.2441 13.7142 10.2451 13.7142H10.2856C10.586 13.715 10.8358 13.483 10.8571 13.1834L11.4285 5.18339C11.4509 4.86783 11.2132 4.59384 10.8976 4.57141Z" fill="black" />
  </svg>
);

const stop = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 0H2C0.898 0 0 0.898 0 2V18C0 19.102 0.898 20 2 20H18C19.102 20 20 19.102 20 18V2C20 0.898 19.102 0 18 0Z" fill="black" />
  </svg>
);
export const Icons = {
  arrowCircleLeft: IconWithContext(<FaRegArrowAltCircleLeft />),
  circle: IconWithContext(<FaRegCircle />),
  timesCircle: IconWithContext(<FaTimesCircle />),
  profile: IconWithContext(<CgProfile />),
  mail: IconWithContext(<CgMail />),
  password: IconWithContext(<CgLock />),
  warning: IconWithContext(<RiErrorWarningLine />),
  plus: plus(),
  cross: cross(),
  note: note(),
  play: play(),
  check: check(),
  trash: trash(),
  stop: stop(),
  NoPhoto: NoPhoto(),
  Board: IconWithContext(<FaClipboardList />),
  OrderLogo: WithSize(OrderLogo),
  Back: IconWithContext(<IoIosArrowBack />),
  Forward: IconWithContext(<IoIosArrowForward />),
  Desktop: WithSize(Desktop),
  Phone: WithSize(Phone),
  Tablet: WithSize(Tablet),
  Task: WithSize(Task),
  ShoppingBag: WithSize(ShoppingBag),
  Shop: WithSize(Shop),
  LogOut: WithSize(LogOut),
  User: WithSize(User),
};
