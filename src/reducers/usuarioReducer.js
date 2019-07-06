import {
    GET_USUARIOS,
    GET_USUARIOS_SUCCESS,
    GET_USUARIOS_FAIL,
    SAVE_USUARIO,
    SAVE_USUARIO_SUCCESS,
    SAVE_USUARIO_FAIL,
    UPDATE_USUARIO,
    UPDATE_USUARIO_SUCCESS,
    UPDATE_USUARIO_FAIL
} from '../actions/actionTypes'

const defaultState = {
    fetching: false,
    error: false,
    usuarios: []
};

const usuarioReducer = (state = defaultState, action) => {
    switch (action.type) {
        //GET
        case GET_USUARIOS: return { ...state, fetching: true }
        case GET_USUARIOS_SUCCESS: return {
            ...state,
            usuarios: [...action.usuarios],
            fetching: false
        };
        case GET_USUARIOS_FAIL: return {
            ...state,
            error: action.error,
            fetching: false
        };

        //POST   
        case SAVE_USUARIO: return {
            ...state,
            fetching: true
        };
        case SAVE_USUARIO_SUCCESS:
            return {
                ...state,
                fetching: false,
                usuarios: [...state.usuarios, action.usuario]
            };
        case SAVE_USUARIO_FAIL: return {
            ...state,
            fetching: false,
            error: action.error
        };

        //PUT 
        case UPDATE_USUARIO: return {
            ...state,
            fetching: true
        };
        case UPDATE_USUARIO_SUCCESS:
            return {
                ...state,
                fetching: false,
                usuarios: replaceUsuarios(state.usuarios, action.usuario),
            };
        case UPDATE_USUARIO_FAIL: return {
            ...state,
            fetching: false,
            error: action.error
        };


        default: return state;
    }
}



const replaceUsuarios = (usuarios, usuario) => {
    let indiceReemplazar = usuarios.findIndex(item => item._id == usuario._id)
    usuarios[indiceReemplazar] = usuario;
    return usuarios;
};


export default usuarioReducer;
