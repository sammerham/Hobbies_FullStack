import styled from 'styled-components';

// Create a button component that'll render an <button> tag with some styles

export const StyledButton = styled.button`
  /* Adapt the colors based on bg prop */
  background-color: ${props => props.bg};
  border: 2px solid ${props => props.bg};
  border-radius: 0.25rem;
  color: white;
  cursor: pointer;
  margin-left: 0.5rem;
  padding: 0.25rem;
  &:hover {
    background-color: white;
    color: ${props => props.bg};
  }
`;
