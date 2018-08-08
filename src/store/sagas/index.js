import { all, takeLatest } from 'redux-saga/effects';

import { newMarkerRequest } from './map';

export default function* rootSaga() {
  yield all([takeLatest('NEW_MARKER_REQUEST', newMarkerRequest)]);
}
