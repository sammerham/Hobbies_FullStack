import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Create a link component that'll render an <Link> tag with some styles

export const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0.5rem;
  color: ${props => props.bg};
  &:hover {
    color: steelblue;
  }
`;
