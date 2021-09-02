import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Create a navbar component that'll render an <div> tag with some styles

export const StyledNavBar = styled.div`
  background-color: ${props => props.bg};
  display: flex;
  padding: 1rem;
  width: 100%;
`;

// Create a link component that'll render an <Link> tag with some styles

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0.5rem;
  color: ${props => props.bg};
  &:hover {
    color: steelblue;
  }
`;
