import { all } from 'redux-saga/effects';

import { watchGetHobbiesAsync } from './containers/HomePage/saga';
import { watchAddHobbiesAsync } from './containers/NewHobbyPage/saga';

// Aggregates multiple Sagas to a single entry point for the sagaMiddleware ---->> rootsage
export default function* rootSaga() {
  yield all([watchGetHobbiesAsync(), watchAddHobbiesAsync()]);
}
