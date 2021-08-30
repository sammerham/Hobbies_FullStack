import { createSelector } from 'reselect';

// hobbies selector
const hSelector = state => state.hobbies.hobbies;

// creates memoized selector functions that only recalculate the output if the inputs change.
export const hobbySelector = createSelector(
  hSelector,
  hobbies => hobbies,
);
