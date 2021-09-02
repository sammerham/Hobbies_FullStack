import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { ADD_HOBBY_ASYNC, ADD_HOBBY, ADD_REQUEST_FAILED } from './constants';

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
    // const hobbies = yield addHobby();
    const result = yield call(axios.post, '/api', {
      hobby: action.hobby,
    });
    const { hobbies } = result.data;
    // dispatches ADD_HOBBY_ASYNC action to the store with hobbies
    yield put({ type: ADD_HOBBY_ASYNC, hobbies });
  } catch (error) {
    // dispatches ADD_REQUEST_FAILED action to the store with the error
    yield put({ type: ADD_REQUEST_FAILED, error });
  }
}

// watcher saga: watches for ADD_HOBBYaction dispatched to the store, starts worker saga
export function* watchAddHobbiesAsync() {
  yield takeEvery(ADD_HOBBY, addHobbiessAsync);
}
