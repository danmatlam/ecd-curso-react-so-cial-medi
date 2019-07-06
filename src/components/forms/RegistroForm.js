import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export default function RegistroForm(props) {

    const [correo, setCorreo] = useState(props.correo);
    const [contrasena, setContrasena] = useState(props.contrasena);
    const [ocupacion, setOcupacion] = useState(props.ocupacion);
    const [nombres, setNombres] = useState(props.nombres)
    const [_id, setId] = useState(props._id)

    const handleSubmit = e => {
        e.preventDefault();
        const usuario = {
            correo,
            contrasena,
            ocupacion,
            nombres,
            _id
        }
        props.handleSubmit(usuario)
    };

    const classes = useStyles();


    return (
        <div>
            <Box >
                <Typography component="h1" variant="h3">
                    {!props._id ? 'Registro' : 'Actualizacion'}
                </Typography>
            </Box>

            <form
                onSubmit={handleSubmit}
                className={classes.form} noValidate>

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Nombre completo"
                    autoFocus
                    onChange={e => setNombres(e.target.value)}
                    value={nombres}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Correo Electronico"
                    autoComplete="email"
                    autoFocus
                    onChange={e => setCorreo(e.target.value)}
                    value={correo}

                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label="Ocupacion"
                    autoFocus
                    onChange={e => setOcupacion(e.target.value)}
                    value={ocupacion}

                />

                {
                    !props._id &&
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Contraseña"
                        type="password"
                        autoComplete="current-password"
                        onChange={e => setContrasena(e.target.value)}
                    />
                }


                <Button
                    disabled={props.fetching}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >


                    {
                        props.fetching ? <i class="fas fa-spinner fa-spin fa-2x	"></i> :
                            !props._id ? 'Registrarse' : props._id && 'Guardar'
                    }






                </Button>





            </form>

        </div>
    )
}


const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
