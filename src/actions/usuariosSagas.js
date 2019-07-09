import { call, put } from "redux-saga/effects";
import axios from "axios";
import { GET_USUARIOS_SUCCESS, GET_USUARIOS_FAIL, UPDATE_USUARIO_FAIL, UPDATE_USUARIO_SUCCESS, SAVE_USUARIO_SUCCESS, SAVE_USUARIO_FAIL } from "./actionTypes";
const url = 'http://localhost:3001/api/usuarios'

/// CRUD


//  -> [C]REATE // GUARDAR
const saveusuario = usuario => {
    return axios.post(url, usuario)
}

// -> [R]EAD LEER
const getUsuarios = () => {
    return axios.get(url);
}

// [U]PDATE / [D]ELETE     ACTULIZAR ELIMINAR
const updateUsuario = usuario => {
    return axios.put(url, usuario);
}



//SAGA
export function* getUsuariosSaga() {
    try {
        //[3.1] NOS SUBSCRIBIMOS 
        const res = yield call(getUsuarios);
        const usuarios = res.data.usuarios;
        //[3.2] YA QUE OBTUVIMOS RESPUESTA
        // DESPACHAMOS UN EVENTO QUE ACTUALIZA LA VISTA
        if (usuarios) {
            yield put({ type: GET_USUARIOS_SUCCESS, usuarios: usuarios });
        }
    } catch (error) {
        alert('UPS ' + error);
        yield put({ type: GET_USUARIOS_FAIL, error: true });
    }

}


export function* updateUsuarioSaga(action) {
    try {
        const res = yield call(updateUsuario, action.usuario);
        const usuario = res.data.usuario;

        if (usuario) {
            yield put({ type: UPDATE_USUARIO_SUCCESS, usuario: usuario });
        }
    }
    catch (error) {
        alert('UPS!: ' + error)
        yield put({
            type: UPDATE_USUARIO_FAIL,
            error: true,
            mensaje: 'Error interno del servidor',
        });
    }
}




export function* saveUsuarioSaga(action) {
    debugger
    try {
        const res = yield call(saveusuario, action.usuario);
        const usuario = res.data.usuario;

        if (usuario) {
            yield put({ type: SAVE_USUARIO_SUCCESS, usuario: usuario });
        }
    }
    catch (error) {
        alert('UPS!: ' + error)
        yield put({
            type: SAVE_USUARIO_FAIL,
            error: true,
            mensaje: 'Error interno del servidor',
        });
    }
}





