import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { LinkPropsType } from './types';

const StyledRouterLink = styled(RouterLink)`
  width: 100%;
  text-decoration: none;
  text-align: center;
`;

const Container = styled.div<{isActive: boolean}>`
  background: ${(props) => (props.isActive ? '#6c5070' : 'none')};
  color: ${(props) => (props.isActive ? 'white' : '#6C5070')};
  line-height: 1.5;
  & svg {
    fill: ${(props) => (props.isActive ? 'white' : '#6C5070')};
  }
`;

export const Link = (props: LinkPropsType): JSX.Element => {
  const {
    href = '',
    children,
    hash,
    className,
    blockActive,
  } = props;

  const location = useLocation();

  const matchUrl = useMemo(() => {
    if (blockActive) {
      return false;
    }

    if (location.pathname.includes(href)) {
      return true;
    }
    return false;
  }, [location.pathname, blockActive]);

  return (
    <StyledRouterLink
      to={{
        pathname: href,
        hash,
      }}
      replace
    >
      <Container
        className={className}
        isActive={matchUrl}
      >
        <span className="content">
          {children}
        </span>
      </Container>
    </StyledRouterLink>
  );
};
