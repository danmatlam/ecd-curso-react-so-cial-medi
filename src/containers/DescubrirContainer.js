import React, { Component } from 'react'
import styled from 'styled-components';
import Carta from './../components/common/Carta'
import { FiPlus, FiUserPlus } from 'react-icons/fi';
import { GET_USUARIOS, UPDATE_USUARIO } from '../actions/actionTypes'
import { connect } from "react-redux";
import Modal from '../components/common/Modal';
import RegistroForm from '../components/forms/RegistroForm'
class DescubrirPersonsContainer extends Component {
    constructor(props) {

        super(props)
        this.state = {
            usuario: {},
        };
        this.openEditarDialog = this.openEditarDialog.bind(this);
        this.closeEditarDialog = this.closeEditarDialog.bind(this);

        this.openEliminarDialog = this.openEliminarDialog.bind(this);
        this.closeEditarDialog = this.closeEditarDialog.bind(this);


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount = () => {
        const { usuariosState } = this.props;
        !usuariosState.usuarios.length && this.props.usuariosRequest()
    };


    openEditarDialog(usuario) {
        this.setState({ editModal: true, usuario })
    }
    openEliminarDialog(usuario) {
        this.setState({ deleteModal: true, usuario })
    }
    closeEditarDialog() {
        this.setState({ editModal: false })
    }
    closeEliminarDialog() {
        this.setState({ deleteModal: false })

    }




    //ACCIONES SERVIDAS POR DISPATCH
    handleSubmit(usuario) {
        this.props.updateUsuario(usuario)
    }
    handleDelete(usuario) {
        usuario.estado = 'I'
        this.props.updateUsuario(usuario);
        this.closeEliminarDialog()
    }

    render() {
        const { usuariosState } = this.props;
        const { editModal, deleteModal } = this.state
        return (
            <div>
                <ContactosList>
                    {
                        usuariosState.usuarios.length
                            ? usuariosState.usuarios.map((usuario, index) =>
                                <Carta
                                    onEdit={() => this.openEditarDialog(usuario)}
                                    onDelete={() => this.openEliminarDialog(usuario)}
                                    key={index}
                                    _id={usuario._id}
                                    foto={usuario.foto}
                                    nombres={usuario.nombres}
                                    correo={usuario.correo}
                                    ocupacion={usuario.ocupacion}
                                />
                            )
                            : <h1>NO HAY DATOS</h1>
                    }
                </ContactosList>



                {
                    deleteModal &&
                    <Modal
                        forward={'si'}
                        handleForward={() => this.handleDelete(this.state.usuario)}
                        closeModal={() => this.closeEliminarDialog()}
                    >
                        <h1>
                            Eliminar: {this.state.usuario.nombres}
                        </h1>

                    </Modal>
                }



                {
                    editModal &&
                    <Modal
                        closeModal={() => this.closeEditarDialog()}
                    >
                        <RegistroForm
                            {...this.state.usuario}
                            handleSubmit={this.handleSubmit}
                            fetching={this.props.usuariosState.fetching}
                        />
                    </Modal>
                }



            </div>

        )
    }
}



const mapStateToProps = (estadoGlobal) => {
    const { usuariosState, usuariosRequest, updateUsuario } = estadoGlobal;
    return {
        usuariosState, // ESTADO
        usuariosRequest,  // DISPATCH
        updateUsuario,   // DISPATCH
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        usuariosRequest: () => dispatch({ type: GET_USUARIOS }),
        updateUsuario: usuario => dispatch({ type: UPDATE_USUARIO, usuario }),
    };
};




export default connect(mapStateToProps, mapDispatchToProps)(DescubrirPersonsContainer)




// ESTILOS
const ContactosList = styled.div`
        display: flex;
        flex-direction:row;
        flex-wrap: wrap;
        justify-content: center;
    }
`