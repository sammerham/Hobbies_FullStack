/*
 *
 * NewHobbyPage actions
 *
 */

import { GET_HOBBIES } from './constants';
// dispatched when hobby added
export function getHobbies() {
  return {
    type: GET_HOBBIES,
  };
}
