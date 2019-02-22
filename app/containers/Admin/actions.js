/*
 *
 * Admin actions
 *
 */

import { DEFAULT_ACTION, FETCH_USER_DATA, USER_DATA_RECEIVED, CREATE_POST_REQUEST, POST_CREATED } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function requestUserData() {
  return {
    type: FETCH_USER_DATA,
  };
}

export function userDataReceived(data) {
  return {
    type: USER_DATA_RECEIVED,
    data,
  };
}

export function createPost(payload) {
  return {
    type: CREATE_POST_REQUEST,
    payload,
  };
}

export function newPostCreated(payload) {
  console.log(payload);
  return {
    type: POST_CREATED,
    payload,
  };
}
