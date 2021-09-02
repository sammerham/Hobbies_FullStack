/*
 *
 * NewHobbyPage actions
 *
 */

import { ADD_HOBBY } from './constants';
// dispatched when hobby added
export function addHobby(hobby) {
  return {
    type: ADD_HOBBY,
    hobby,
  };
}
