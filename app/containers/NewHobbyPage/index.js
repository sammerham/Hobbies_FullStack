import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import { ADD_HOBBY } from '../../constants/constants';
import {
  StyledTitle,
  StyledButton,
  StyledForm,
} from '../../styledComponents/styledComponents';

/*
 * NewHobbyPage
 *
 * This is the page with a form to add a new hobby, at the '/new' route
 * State: formData
 * Routes-- -> NewHobbyPage
 */

export default function NewHobbyPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({ hobby: '' });

  // handles submit and redirects to homepage on success
  function handleSubmit(evt) {
    evt.preventDefault();
    // dispatch({ type: ADD_HOBBY, hobby: formData.hobby, id: uuidv4() });
    dispatch({ type: ADD_HOBBY, hobby: formData.hobby });
    setFormData({ hobby: '' });
    history.push('/');
  }

  // handle chnage fn for the form
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
    <div>
      <StyledTitle bg="dimgray">New Hobby</StyledTitle>
      <StyledForm onSubmit={handleSubmit}>
        <input
          name="hobby"
          id="hobby"
          aria-label="hobby"
          required
          placeholder="Enter a new hobby"
          value={formData.hobby}
          onChange={handleChange}
        />
        <StyledButton bg="dimgray">Add</StyledButton>
      </StyledForm>
    </div>
  );
}
