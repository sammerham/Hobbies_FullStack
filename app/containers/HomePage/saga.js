import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import { getHobiesAsync, getRequestFailed } from './actions';
import { GET_HOBBIES } from './constants';

// worker saga: makes the api call when watcher saga sees the GET_HOBBIES action
function* getHobbiessAsync() {
  /**  
   * fetch hobbies from api
   * @params
   * None
   * @returns 
  {
    "hobbies":
    [
      "running",
      "reading",
      "walking",
      "gardening"
    ]
  }
   */
  try {
    // calls api to get all hobbies
    const result = yield call(axios.get, '/api');
    const { hobbies } = result.data;

    // dispatches GET_HOBBIES_ASYNC action to the store with hobbies
    yield put(getHobiesAsync(hobbies));
  } catch (error) {
    // dispatches GET_REQUEST_FAILED action to the store with the error
    yield put(getRequestFailed(error));
  }
}

// watcher saga: watches for GET_HOBBIES action dispatched to the store, starts worker saga
export function* watchGetHobbiesAsync() {
  yield takeEvery(GET_HOBBIES, getHobbiessAsync);
}
