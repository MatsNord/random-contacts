import { call, put, /*takeEvery,*/ takeLatest } from 'redux-saga/effects'
//import Api from '...'

import {
  CONTACTS_REQUESTED,
  requestContactsSuccess
} from './../actions';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchContacts(action) {
   try {
      const seed = 'foobar';
      const resultCount = 10;
      const rawContacts = yield call(fetch, `https://randomuser.me/api?results=${resultCount}&seed=${seed}`);
      const {results} = yield rawContacts.json();
      yield put( requestContactsSuccess(results) );
   } catch (e) {
      console.log(e);
      //yield put({type: "CONTACTS_REQUESTED_FAILED", message: e.message});
   }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* contactsSaga() {
//   yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* contactsSaga() {
  yield takeLatest(CONTACTS_REQUESTED, fetchContacts);
}

export default contactsSaga;