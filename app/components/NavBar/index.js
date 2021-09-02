import React from 'react';
import { StyledNavBar, StyledLink } from './styledComponents';

/*
 * NavBar
 * App-- -> NavBar
 */

export default function NavBar() {
  return (
    <StyledNavBar bg="lightgrey">
      <StyledLink to="/" bg="black">
        Home
      </StyledLink>
      <StyledLink to="/new" bg="black">
        New Hobby
      </StyledLink>
    </StyledNavBar>
  );
}
