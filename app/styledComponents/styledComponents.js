import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Create a Title component that'll render an <h1> tag with some styles

export const StyledTitle = styled.h1`
  color: ${props => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

// Create a form component that'll render an <form> tag with some styles
export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Create a paragraph component that'll render an <p> tag with some styles
export const StyledParag = styled.p`
  margin-left: 20px;
  font-style: italic;
  text-transform: capitalize;
`;
