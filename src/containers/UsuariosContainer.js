import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components';
import { GET_USUARIOS, SAVE_USUARIO, UPDATE_USUARIO } from '../actions/actionTypes';
import Carta from '../components/common/Carta'
import Modal from '../components/common/Modal';
import RegistroForm from '../components/forms/RegistroForm';
import { DialogTitle, DialogContentText } from '@material-ui/core';
class UsuariosContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usuario: {},
            editModal: false,
            eliminarModal: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitEliminar = this.handleSubmitEliminar.bind(this);
    }

    //CICLO DE VIDA
    componentDidMount = () => {
        this.props.getUsuarios()
    };

    //FUNCIONES PROPIAS
    openEditarDialog(usuario) {
        this.setState({
            editModal: true,
            usuario: usuario,
        })
    }
    closeEditarDialog() {
        this.setState({
            editModal: false,
        })
    }

    hanldeEliminarModal(usuario, modalAction) {

        debugger
        if (modalAction) {
            this.setState({
                eliminarModal: true,
                usuario: usuario,
            })
        }
        else {
            this.setState({
                eliminarModal: false,
                usuario: {},
            })
        }
    }



    /// TENGO QUE BINDEAR ESTAS FUNCIONES
    handleSubmit(usuario) {
        usuario.estado = 'A';
        this.props.updateUsuario(usuario)
    }
    handleSubmitEliminar(usuario) {
        debugger
        usuario.estado = 'I';
        this.props.updateUsuario(usuario)
    }



    render() {
        const { usuariosState } = this.props;
        const { editModal, eliminarModal } = this.state
        return (
            <div>
                <ContactosList>
                    {
                        usuariosState.usuarios.length
                            ? usuariosState.usuarios.map((usuario) =>
                                <Carta
                                    onEdit={() => this.openEditarDialog(usuario)}
                                    onDelete={() => this.hanldeEliminarModal(usuario, true)}
                                    key={usuario._id}
                                    _id={usuario._id}
                                    foto={usuario.foto}
                                    nombres={usuario.nombres}
                                    correo={usuario.correo}
                                    ocupacion={usuario.ocupacion}
                                    estado={usuario.estado}
                                />
                            )
                            : <h1>NO HAY DATOS</h1>
                    }
                </ContactosList>
                {
                    editModal &&
                    <Modal
                        closeModal={() => this.closeEditarDialog()}>
                        <RegistroForm
                            {...this.state.usuario}
                            handleSubmit={this.handleSubmit}
                            fetching={this.props.usuariosState.fetching}
                        />
                    </Modal>
                }

                {
                    eliminarModal &&
                    <Modal
                        titulo='Vas a eliminar a: '
                        closeModal={() => this.hanldeEliminarModal()}
                        avanzar='Continuar'
                        hanldeAvanzar={() => this.handleSubmitEliminar(this.state.usuario)}
                    >
                        <DialogContentText>
                            {this.state.usuario.nombres} ?
                        </DialogContentText>
                        <DialogContentText>
                            {this.state.usuario._id}
                        </DialogContentText>
                    </Modal>
                }

            </div>
        )
    }
}

const mapStateToProps = (estadoGlobal) => {
    // const usuariosState = estadoGlobal.usuariosState;
    // const getUsuarios = estadoGlobal.getUsuarios;
    const { usuariosState, getUsuarios, updateUsuario } = estadoGlobal;
    return {
        usuariosState,  // ESTADO
        getUsuarios, // DISPATCH ACCIONES
        updateUsuario  // DISPATCH ACCIONES
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsuarios: () => dispatch({ type: GET_USUARIOS }),
        updateUsuario: usuario => dispatch({ type: UPDATE_USUARIO, usuario })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsuariosContainer)


// ESTILOS
const ContactosList = styled.div`
        display: flex;
        flex-direction:row;
        flex-wrap: wrap;
        justify-content: center;
    }
`