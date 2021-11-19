import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { addHobbyAsync, addRequestFailed } from './actions';
import { ADD_HOBBY } from './constants';

// worker saga: makes the api call when watcher saga sees the ADD_HOBBY action
function* addHobbiessAsync(action) {
  // post a hobby to api
  /** 
   * @params : none
   * @returns 
  {
    "hobbies":
    [
    "swimming",
    "running",
    "reading",
    "walking",
    "gardening"
  ]
}
*/
  try {
    // calls api to post a hobby to hobbies
    const result = yield call(axios.post, '/api', {
      hobby: action.hobby,
    });
    const { hobbies } = result.data;
    // dispatches ADD_HOBBY_ASYNC action to the store with hobbies
    yield put(addHobbyAsync(hobbies));
  } catch (error) {
    // dispatches ADD_REQUEST_FAILED action to the store with the error
    yield put(addRequestFailed(error));
  }
}

// watcher saga: watches for ADD_HOBBY action dispatched to the store, starts worker saga
export function* watchAddHobbiesAsync() {
  yield takeEvery(ADD_HOBBY, addHobbiessAsync);
}
