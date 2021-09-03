import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { hobbySelector, errorSelector } from './selectors';
import { getHobbies } from './actions';
import { StyledParag } from '../../components/Paragraph';
import ListItem from '../../components/ListItem';
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 * Routes-- -> HomePage
 */

export default function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHobbies());
  }, []);
  const hobbies = useSelector(hobbySelector);
  const error = useSelector(errorSelector);

  if (error) {
    return <ListItem item="Something went wrong, please try again!" />;
  }
  if (hobbies.length === 0) {
    return <ListItem item="Hobby List is empty, enter your hobby" />;
  }
  if (hobbies.length) {
    return hobbies.map(hobby => (
      <StyledParag key={uuidv4()}>{hobby}</StyledParag>
    ));
  }
  return <FontAwesomeIcon icon={faSpinner} spin />;
}
