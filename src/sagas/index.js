import { call, put, /*takeEvery,*/ takeLatest } from 'redux-saga/effects'
//import Api from '...'

import {
  CONTACTS_REQUESTED,
  requestContactsSuccess
} from './../actions';

function* fetchContacts(action) {
   try {
      const seed = 'foobar';
      const resultCount = 10;
      
      // using the call effect meakes this saga possible to test without a mock. Super! I did not make a test, bad!!
      // Yes I know... the url string should go into my api module
      const rawContacts = yield call(fetch, `https://randomuser.me/api?results=${resultCount}&seed=${seed}`);
      const {results} = yield rawContacts.json();
      yield put( requestContactsSuccess(results) );
   } catch (e) {
      console.log(e);
      //yield put({type: "CONTACTS_REQUESTED_FAILED", message: e.message});
   }
}

function* contactsSaga() {
  yield takeLatest(CONTACTS_REQUESTED, fetchContacts);
}

export default contactsSaga;