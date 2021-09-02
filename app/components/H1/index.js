import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
export const StyledTitle = styled.h1`
  color: ${props => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledTitle;
