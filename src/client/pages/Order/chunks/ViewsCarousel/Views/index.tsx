import React from 'react';
import styled from 'styled-components';
import { CommonPreviewAttrsType, CommonPreviewPropsType, ComponentPropType } from './types';

const Component = (props: ComponentPropType): JSX.Element => {
  const {
    className,
    srcImg,
    altImg,
  } = props;

  return (
    <div className={className}>
      <img
        src={srcImg}
        alt={altImg}
      />
      <div className="preview__text-container">
        <div className="preview__text">John Doe</div>
      </div>
    </div>
  );
};
//   //max-width: 100%;
const StyledComponent: CommonPreviewPropsType = styled(Component)`
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.1));
  height: max-content;

  & img {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
  }

  & .preview__text-container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    //background-color: #d9d9ce;
  }

  &:hover {
    z-index: 10;
  }

  &:hover img {
     //opacity: 0.3;
    filter: brightness(40%);
  }

  &:hover .preview__text-container {
     opacity: 1;
  }

  & .preview__text {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
`;

export const DesktopPreview: CommonPreviewPropsType = styled(StyledComponent)`
  margin: 0 auto;
  width: 50%;
 
`;

export const TabletPreview: CommonPreviewPropsType = styled(StyledComponent)`
  width: 25%;
  //position: absolute;
  //left: 10%;
  //z-index: 10;
`;

export const MobilePreview: CommonPreviewPropsType = styled(StyledComponent)`
  width: 15%;
  //position: absolute;
  //right: 10%;
  //z-index: 10;
`;
