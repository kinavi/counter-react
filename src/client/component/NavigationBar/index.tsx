import React from 'react';
import styled from 'styled-components';
import { Link } from '../UI/Link';
import { Icons } from '../UI/Icons';

const Container = styled.div`
  background: #F6F6E3;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.1));
  display: flex;
  flex-direction: column;
  min-width: 60px;
  align-items: center;
  z-index: 50;
  padding: 25px 0;
`;

const StyledLink = styled(Link)`
  width: 100%;
  padding: 10px 0;
`;

// TODO: !!
export const NavigationBar = (props) => {
  const {
    // children,
  } = props;
  return (
    <Container>
      <StyledLink
        href="/time-manager"
      >
        {Icons.Task({ size: 'm' })}
      </StyledLink>
      <StyledLink
        href="/order"
      >
        {Icons.ShoppingBag({ size: 'm' })}
      </StyledLink>
      <StyledLink
        href="/auth"
      >
        {Icons.User({ size: 'm' })}
      </StyledLink>
    </Container>
  );
};
