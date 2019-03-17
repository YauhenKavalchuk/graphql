import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';

import DirectorsDialog from '../DirectorsDialog/DirectorsDialog';
import DirectorsSearch from '../DirectorsSearch/DirectorsSearch';

import withHocs from './DirectorsTableHoc';

class DirectorsTable extends React.Component {
  state = {
    anchorEl: null,
    openDialog: false,
    name: '',
  };

  handleChange = name => (event) => {
    this.setState({ [name]: event.target.value });
  };

  handleSearch = (e) => {
    const { data } = this.props;
    const { name } = this.state;

    if(e.charCode === 13) {
      data.fetchMore({
        variables: { name },
        updateQuery: (previousResult, { fetchMoreResult }) => fetchMoreResult,
      });
    }
  };

  handleDialogOpen = () => { this.setState({ openDialog: true }); };
  handleDialogClose = () => { this.setState({ openDialog: false }); };

  handleClick = ({ currentTarget }, data) => {
    this.setState({
      anchorEl: currentTarget,
      data,
    });
  };

  handleClose = () => { this.setState({ anchorEl: null }); };

  handleEdit = (row) => {
    this.props.onOpen(this.state.data);
    this.handleClose();
  };

  handleDelete = () => {
    this.handleDialogOpen();
    this.handleClose();
  };

  render() {
    const { anchorEl, openDialog, data: activeElem = {}, name } = this.state;
    const { classes, data = {} } = this.props;
    const { directors = [] } = data;

    return (
      <>
        <Paper>
          <DirectorsSearch name={name} handleChange={this.handleChange} handleSearch={this.handleSearch} />
        </Paper>
        <DirectorsDialog open={openDialog} handleClose={this.handleDialogClose} id={activeElem.id} />
        <Paper className={classes.root}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell>Movies</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {directors.map(director => {
                return (
                  <TableRow key={director.id}>
                    <TableCell component="th" scope="row">{director.name}</TableCell>
                    <TableCell align="right">{director.age}</TableCell>
                    <TableCell>
                      {director.movies.map((movie, key) => <div key={movie.name}>{`${key+1}. `}{movie.name}</div>)}
                    </TableCell>
                    <TableCell align="right">
                      <>
                        <IconButton color="inherit" onClick={(e) => this.handleClick(e, director)}>
                          <MoreIcon />
                        </IconButton>
                        <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose} >
                          <MenuItem onClick={() => this.handleEdit(director)}><CreateIcon /> Edit</MenuItem>
                          <MenuItem onClick={this.handleDelete}><DeleteIcon /> Delete</MenuItem>
                        </Menu>
                      </>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </>
    );
  }
};

export default withHocs(DirectorsTable);
