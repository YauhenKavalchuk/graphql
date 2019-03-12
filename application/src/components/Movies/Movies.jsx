import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import MoviesTable from '../MoviesTable/MoviesTable';
import MoviesForm from '../MoviesForm/MoviesForm';

import withHocs from './MoviesHoc';

class Movies extends React.Component {
  state = {
    open: false,
    name: '',
    genre: '',
    watched: false,
    rate: 0,
    directorId: '',
  }

  handleClickOpen = (data = {}) => {
    this.setState({
      open: true,
      ...data,
      directorId: data.director ? data.director.id : '',
    });
  };

  handleClose = () => {
    this.setState({
      name: '',
      genre: '',
      watched: false,
      rate: 0,
      directorId: '',
      open: false
    });
  };

  handleSelectChange = ({ target }) => { this.setState({ [target.name]: target.value }); };
  handleCheckboxChange = name => ({ target }) => { this.setState({ [name]: target.checked }); };
  handleChange = name => ({ target }) => { this.setState({ [name]: target.value }); };

  render() {
    const { id, name, genre, watched, rate, directorId, open } = this.state;
    const { classes } = this.props;

    return (
      <>
        <MoviesForm handleChange={this.handleChange} handleSelectChange={this.handleSelectChange} handleCheckboxChange={this.handleCheckboxChange} selectedValue={{ id, name, genre, watched, rate, directorId }} open={open} onClose={this.handleClose} />
        <div className={classes.wrapper}>
          <MoviesTable onOpen={this.handleClickOpen} onClose={this.handleClose} />
          <Fab onClick={() => this.handleClickOpen()} color="primary" aria-label="Add" className={classes.fab}>
            <AddIcon />
          </Fab>
        </div>
      </>
    );
  }
};

export default withHocs(Movies)
