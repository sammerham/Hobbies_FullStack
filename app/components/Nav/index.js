import styled from 'styled-components';

// Create a navbar component that'll render an <div> tag with some styles

export const StyledNavBar = styled.div`
  background-color: ${props => props.bg};
  display: flex;
  padding: 1rem;
  width: 100%;
`;
