import {
    GET_USUARIOS, GET_USUARIOS_SUCCESS, GET_USUARIOS_FAIL,
    UPDATE_USUARIO, UPDATE_USUARIO_SUCCESS, UPDATE_USUARIO_FAIL

} from "../actions/actionTypes";


const defaultState = {
    usuarios: [],
    error: false,
    fetching: false,
}


const usuariosReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_USUARIOS: return { ...state, fetching: true }
        case GET_USUARIOS_SUCCESS: return {
            ...state,
            usuarios: [...action.usuarios],
            fetching: false
        }
        case GET_USUARIOS_FAIL: return {
            ...state,
            error: action.error,
            fetching: false
        }

        //PUT 
        case UPDATE_USUARIO: return {
            ...state,
            fetching: true
        };
        case UPDATE_USUARIO_SUCCESS:
            debugger
            if (action.usuario.estado === 'I') {
                return {
                    ...state,
                    fetching: false,
                    usuarios: deleteUsuario(state.usuarios, action.usuario),
                };
            }
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


const deleteUsuario = (usuarios, usuario) => {
    debugger
    let indiceReemplazar = usuarios.findIndex(item => item._id == usuario._id)
    usuarios.splice(indiceReemplazar, 1)
    return usuarios;
};

export default usuariosReducer;