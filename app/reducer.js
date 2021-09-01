import {
  GET_HOBBIES_ASYNC,
  ADD_HOBBY_ASYNC,
  GET_REQUEST_FAILED,
  ADD_REQUEST_FAILED,
} from './constants/constants';

const DEFAULT_STATE = {
  hobbies: [],
  error: false,
};

export default function hobbiesReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case GET_HOBBIES_ASYNC:
      return { hobbies: action.hobbies };
    case GET_REQUEST_FAILED:
      return { error: action.error };
    case ADD_HOBBY_ASYNC:
      return { hobbies: action.hobbies };
    case ADD_REQUEST_FAILED:
      return { error: action.error };
    default:
      return state;
  }
}
