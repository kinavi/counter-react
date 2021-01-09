import React, { useRef } from 'react';
import styled from 'styled-components';
import {
  DesktopPreview,
  MobilePreview,
  TabletPreview,
} from './Views';

import { Button } from '../../../../component/UI/Button';
import { Icons } from '../../../../component/UI/Icons';
import { IMG } from '../../../../component/UI/Img';
import { getStaticPath } from '../../../../constants';

const StyledButton = styled(Button)`
  z-index: 15;
  padding: 0 25px;
  &:last-child {
    margin-left: 25px;
  }
  &:first-child {
    margin-right: 25px;
  }
`;

type ComponentPropsType = {
    className?: string;
}

const Component = (props: ComponentPropsType) => {
  const {
    className,
  } = props;
  console.log('IMG.ztech.tabletPreview', IMG.ztech.tabletPreview);
  return (
    <div className={className}>
      <TabletPreview srcImg={IMG.ztech.tabletPreview} altImg="pZtech" />
      <DesktopPreview srcImg={IMG.ztech.desktopPreview} altImg="dztech" />
      <MobilePreview srcImg={IMG.ztech.mobilePreview} altImg="mZtech" />
    </div>
  );
};

export const ViewsCarousel = styled(Component).attrs((props: {size: number}) => ({
  size: `${props.size}%` || '22%',
}))`
  background: none;
  position: relative;
  padding: 0;
  filter: none;
  box-sizing: border-box;
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

export const CarouselWrapper = (props) => {
  const {
    className,
    children,
  } = props;

  return (
    <div className={className}>
      <StyledButton>{Icons.Back}</StyledButton>
      <ViewsCarousel />
      <StyledButton>{Icons.Forward}</StyledButton>
    </div>
  );
};

export const StyledCarouselWrapper = styled(CarouselWrapper)`
  display: flex;
  margin-bottom: 25px;
`;
