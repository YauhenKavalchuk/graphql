import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import BlockIcon from '@material-ui/icons/Block';

import withHocs from './MoviesDialogHoc';

class MoviesDialog extends React.Component {

  handleDelete = () => {
    const { id, handleClose, deleteMovie } = this.props;
    deleteMovie(id);
    handleClose();
  }

  render() {
    const { open, handleClose } = this.props;

    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sire that you want to delete element?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            If you click 'Confirm' this element will be removed from data base.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            <BlockIcon /> Cancel
          </Button>
          <Button onClick={this.handleDelete} color="primary" autoFocus>
            <DeleteForeverIcon/> Confirm
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withHocs(MoviesDialog);
