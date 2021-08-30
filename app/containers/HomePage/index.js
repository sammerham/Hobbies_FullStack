import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { hobbySelector } from '../../selectors';
import { GET_HOBBIES } from '../../constants/constants';
import { StyledParag } from '../../styledComponents/styledComponents';
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 * Routes-- -> HomePage
 */

export default function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_HOBBIES });
  }, []);
  const hobbies = useSelector(hobbySelector);
  return hobbies.length ? (
    hobbies.map(hobby => (
      // <StyledParag key={hobby.id} >
      <StyledParag key={uuidv4()}>
        {/* {hobby.hobby} */}
        {hobby}
      </StyledParag>
    ))
  ) : (
    <FontAwesomeIcon icon={faSpinner} spin />
  );
}
