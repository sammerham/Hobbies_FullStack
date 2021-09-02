import { createSelector } from 'reselect';

// hobbies selector
const hSelector = state => state.hobbies.hobbies;
// error selector
const eSelector = state => state.hobbies.error;

// creates memoized selector functions that only recalculate the output if the inputs change.
export const hobbySelector = createSelector(
  hSelector,
  hobbies => hobbies,
);
export const errorSelector = createSelector(
  eSelector,
  error => error,
);
