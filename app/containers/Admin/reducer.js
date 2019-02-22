/*
 *
 * Admin reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CLEAR_MESSAGES,
  DEFAULT_ACTION,
  POST_CREATED,
  POST_DELETED,
  POST_UPDATED,
  USER_DATA_RECEIVED,
} from './constants';

export const initialState = fromJS({
  users: null,
  posts: null,
  categories: null,
  successMessage: false,
  errorMessage: false,
});

function adminReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case USER_DATA_RECEIVED:
      return state
        .set('users', action.data.users)
        .set('posts', action.data.posts)
        .set('categories', action.data.categories);
    case POST_UPDATED:
      return state.set('successMessage', 'Post Successfully Updated!');
    case POST_DELETED:
      return state.set('successMessage', 'Post successfully deleted!');
    case POST_CREATED:
      return state.set('successMessage', 'Post successfully created!');
    case CLEAR_MESSAGES:
      return state.set('successMessage', false).set('errorMessage', false);
    default:
      return state;
  }
}

export default adminReducer;
