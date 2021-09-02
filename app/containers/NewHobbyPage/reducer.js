import { ADD_HOBBY_ASYNC, ADD_REQUEST_FAILED } from './constants';

const DEFAULT_STATE = {
  hobbies: [],
  error: false,
};

export default function addHobbyReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_HOBBY_ASYNC:
      return { hobbies: action.hobbies };
    case ADD_REQUEST_FAILED:
      return { error: action.error };
    default:
      return state;
  }
}
