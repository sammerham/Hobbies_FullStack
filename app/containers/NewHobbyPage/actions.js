/*
 *
 * NewHobbyPage actions
 *
 */

import { ADD_HOBBY, ADD_HOBBY_ASYNC, ADD_REQUEST_FAILED } from './constants';

export function addHobby(hobby) {
  return {
    type: ADD_HOBBY,
    hobby,
  };
}

export function addHobbyAsync(hobbies) {
  return {
    type: ADD_HOBBY_ASYNC,
    hobbies,
  };
}
export function addRequestFailed(error) {
  return {
    type: ADD_REQUEST_FAILED,
    error,
  };
}
