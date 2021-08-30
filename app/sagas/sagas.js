import { put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_HOBBIES_ASYNC,
  ADD_HOBBY_ASYNC,
  ADD_HOBBY,
  GET_HOBBIES,
  GET_REQUEST_FAILED,
  ADD_REQUEST_FAILED,
} from 'constants/constants';

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
  async function getHHobbies() {
    const res = await axios.get('/api');
    return res.data.hobbies;
  }
  try {
    const hobbies = yield getHHobbies();
    // dispatches GET_HOBBIES_ASYNC action if successfull
    yield put({ type: GET_HOBBIES_ASYNC, hobbies });
  } catch (error) {
    // dispatches GET_REQUEST_FAILED action if failed
    yield put({ type: GET_REQUEST_FAILED, error });
  }
}

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
  async function addHobby() {
    const res = await axios.post('/api', {
      hobby: action.hobby,
      // id: action.id,
    });
    return res.data.hobbies;
  }
  try {
    const hobbies = yield addHobby();
    // dispatches ADD_HOBBY_ASYNC action if successfull
    yield put({ type: ADD_HOBBY_ASYNC, hobbies });
  } catch (error) {
    // dispatches ADD_REQUEST_FAILED action if failed
    yield put({ type: ADD_REQUEST_FAILED, error });
  }
}
// listens for a dispatche to the Store that matches GET_HOBBIES pattern
function* watchGetHobbiesAsync() {
  yield takeEvery(GET_HOBBIES, getHobbiessAsync);
}
// listens for a dispatche to the store that matches ADD_HOBBY pattern
function* watchAddHobbiesAsync() {
  yield takeEvery(ADD_HOBBY, addHobbiessAsync);
}
// Aggregates multiple Sagas to a single entry point for the sagaMiddleware ---->> rootsage
export default function* rootSaga() {
  yield all([watchGetHobbiesAsync(), watchAddHobbiesAsync()]);
}
