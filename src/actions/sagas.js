
import { takeLatest, call, put } from "redux-saga/effects";
import {
    GET_USUARIOS,
    SAVE_USUARIO,
    UPDATE_USUARIO
} from './actionTypes';
import { getUsuariosSaga, updateUsuarioSaga } from './usuariosSagas'
export function* watcherSaga() {
    // USUARIO
    yield takeLatest(GET_USUARIOS, getUsuariosSaga);
    yield takeLatest(UPDATE_USUARIO, updateUsuarioSaga);


}