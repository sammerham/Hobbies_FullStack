import { GET_HOBBIES_ASYNC, ADD_HOBBY_ASYNC } from './constants/constants';

const DEFAULT_STATE = {
  hobbies: [],
};

export default function hobbiesReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case GET_HOBBIES_ASYNC:
      return { hobbies: action.hobbies };
    case ADD_HOBBY_ASYNC:
      return { hobbies: action.hobbies };
    default:
      return state;
  }
}
