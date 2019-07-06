//Importar librerias necesarias
import { combineReducers } from "redux";

// Importar reducers [1]
import usuariosReducer from './usuariosReducer'

// Exportar reducers como estados [2]
export default combineReducers({
    usuariosState: usuariosReducer,
})