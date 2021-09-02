import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_HOBBIES_ASYNC,
  GET_HOBBIES,
  GET_REQUEST_FAILED,
} from './constants';

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
    // const hobbies = yield getHHobbies();
    const result = yield call(axios.get, '/api');
    const { hobbies } = result.data;

    // dispatches GET_HOBBIES_ASYNC action to the store with hobbies
    yield put({ type: GET_HOBBIES_ASYNC, hobbies });
  } catch (error) {
    // dispatches GET_REQUEST_FAILED action to the store with the error
    yield put({ type: GET_REQUEST_FAILED, error });
  }
}

// watcher saga: watches for GET_HOBBIES action dispatched to the store, starts worker saga
export function* watchGetHobbiesAsync() {
  yield takeEvery(GET_HOBBIES, getHobbiessAsync);
}
