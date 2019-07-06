
import { call, put } from "redux-saga/effects";
import axios from "axios";

// [1] IMPORTAR LOS TIPOS DE ACCIÓN: Véanlo como ids de las acciones
// Conociendo los id, podemos vinular SAGAS con REDUCER
import { GET_USUARIOS_SUCCESS, GET_USUARIOS_FAIL, SAVE_USUARIO_SUCCESS, SAVE_USUARIO_FAIL, UPDATE_USUARIO_SUCCESS, UPDATE_USUARIO_FAIL } from './actionTypes'

//[2] INTANCIAR WEB SERVICES
let url = 'https://ecd-curso-react-social-media.herokuapp.com/api/usuarios';
url = 'http://localhost:3001/api/usuarios';

const getUsuarios = () => {
    return axios.get(url);
}
const saveUsuario = usuario => {
    return axios.post(url, usuario);
}

const updateUsuario = usuario => {
    return axios.put(url, usuario);
}



//[3] SAGA
export function* getUsuariosSaga() {
    try {
        //[3.1] NOS SUBSCRIBIMOS A [2]
        const res = yield call(getUsuarios);
        const usuarios = res.data.usuarios;
        //[3.2] YA QUE OBTUVIMOS RESPUESTA DE [2] 
        // DESPACHAMOS UN EVENTO QUE ACTUALIZA LA VISTA
        if (usuarios) {
            yield put({ type: GET_USUARIOS_SUCCESS, usuarios: usuarios });
        }
    }
    //[3.3] SI ERROR , DESPACHAMOS REDCUER DE ERROR
    catch (error) {
        alert('UPS' + error)
        yield put({
            type: GET_USUARIOS_FAIL,
            error: true,
        });
    }
}


export function* saveUsuarioSaga(action) {
    try {
        const res = yield call(saveUsuario, action.usuario);
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


export function* updateUsuarioSaga(action) {
    try {
        const res = yield call(updateUsuario, action.usuario);
        const usuario = res.data.usuario;
        debugger
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



//NOTA: SI PUDIERON NOTAR NO ESTOY LLAMANDO EN NINGUN MOMENTO A 
//usuarioReducers, SIN EMBARGO (usuariosSagas y usuarioReducers) 
//SE ENUCUENTRAN  VINCULADOS DEBIDO A QUE ESTAMOS USANDO LOS
//actionTypes





