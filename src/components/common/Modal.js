import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Modal(props) {
    return (
        <Dialog open={true}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {props.titulo}
            </DialogTitle>


            <DialogContent>
                {props.children}
            </DialogContent>
            <DialogActions>
                <Button onClick={props.closeModal} color="primary">
                    Salir
                   </Button>

                {
                    props.hanldeAvanzar &&
                    <Button onClick={props.hanldeAvanzar} color="primary">
                        {props.avanzar}
                    </Button>
                }

            </DialogActions>
        </Dialog>
    );
}