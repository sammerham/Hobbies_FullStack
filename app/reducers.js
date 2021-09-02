/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import hobbiesReducer from './containers/HomePage/reducer';
import addHobbyReducer from './containers/NewHobbyPage/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer() {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    router: connectRouter(history),
    hobbies: hobbiesReducer,
    addHobby: addHobbyReducer,
  });
  return rootReducer;
}
