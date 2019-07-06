import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Modal(props) {
    return (
        <div>
            <Dialog
                open
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogActions>
                    <Button onClick={props.closeModal} color="primary">
                        <i class="fas fa-times"></i>
                    </Button>
                </DialogActions>
                <DialogContent>
                    {props.children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.closeModal} color="primary">
                        Salir
                   </Button>
                    <Button onClick={props.handleForward} color="primary">
                        {props.forward}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}