import React, { Component } from 'react'
import styled from 'styled-components';
import AppLayout from '../components/theme/AppLayout'
import Carta from '../components/common/Carta'
import AsideLayout from '../components/theme/AsideLayout';

// import { usuarios } from '../../actions/mockData/index'

export default class ContactosContainer extends Component {


    render() {
        const usuarios = []
        return (
            <ContactosList>
                {
                    usuarios.length && usuarios.map((item) =>
                        <Carta
                            foto={item.foto}
                            nombres={item.nombres}
                            correo={item.correo}
                            descripcion={item.descripcion}

                        />
                    )
                }
            </ContactosList>
        )
    }
}


// ESTILOS
const ContactosList = styled.div`
        display: flex;
        flex-direction:row;
        flex-wrap: wrap;
        justify-content: center;
    }
`