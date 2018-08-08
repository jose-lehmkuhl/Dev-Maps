import { call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../services/api';

import { newMarkerSuccess, newMarkerFail } from '../ducks/map';

export function* newMarkerRequest(action) {
  try {
    const { data } = yield call(api.get, action.payload);

    const isDuplicated = yield select(state =>
      state.map.markers.find(({ user }) => user.id === data.id));

    if (isDuplicated) {
      yield put(newMarkerFail('usuario duplicado'));
      toast.error('usuario duplicado');
    } else {
      yield put(newMarkerSuccess(data));
      toast.success('usuario adicionado com sucesso');
    }
  } catch (err) {
    yield put(newMarkerFail('erro ao buscar usuario'));
    toast.error('erro ao buscar usuario');
  }
}
