import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const StyledLink = styled(RouterLink)`
  text-decoration: none;
`;

const Link = ({ className, ...others }) => {
  return (
    <StyledLink className={className} {...others}>
      {this.props.children}
    </StyledLink>
  )
}

export default Link
