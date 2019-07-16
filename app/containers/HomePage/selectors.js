/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.username,
  );
const makeCount = () =>
  createSelector(
    selectHome,
    homeState => homeState.point,
  );
const makeSelectUrlImage = () =>
  createSelector(
    selectHome,
    homeState => homeState.urlImage,
  );
export { selectHome, makeSelectUsername, makeCount, makeSelectUrlImage };
