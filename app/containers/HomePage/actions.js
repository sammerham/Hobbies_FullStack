/*
 *
 * HomePage actions
 *
 */

import {
  GET_HOBBIES,
  GET_HOBBIES_ASYNC,
  GET_REQUEST_FAILED,
} from './constants';

// dispatched when hobby added

export function getHobbies() {
  return {
    type: GET_HOBBIES,
  };
}

export function getHobiesAsync(hobbies) {
  return {
    type: GET_HOBBIES_ASYNC,
    hobbies,
  };
}
export function getRequestFailed(error) {
  return {
    type: GET_REQUEST_FAILED,
    error,
  };
}
