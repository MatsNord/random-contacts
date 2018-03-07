import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga';

import { contactsReducer } from './../reducers';
import contactsSaga from './../sagas';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middleWaresChain = [sagaMiddleware, logger];

// mount it on the Store
const store = createStore(
  contactsReducer,
  applyMiddleware(...middleWaresChain),
)

// then run the saga
sagaMiddleware.run(contactsSaga);

//...render
export default store;