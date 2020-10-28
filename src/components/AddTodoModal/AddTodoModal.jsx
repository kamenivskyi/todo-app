import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import InputBase from '@material-ui/core/InputBase';

import SearchIcon from '@material-ui/icons/Search';

import { useStyles } from './AddTodoModal.styles';

const AddTodoModal = ({ open, handleClose }) => {
  const classes = useStyles();

  const [input, setInput] = React.useState('');

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(input);
          }}
        >
          <div className={classes.paper}>
            <h2 id='transition-modal-title'>Add new todo</h2>
            <p id='transition-modal-description'>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder='Search…'
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              {/* <TextField
                onChange={(e) => setInput(e.target.value)}
                value={input}
                label='What needs to be done?'
              /> */}
            </p>
          </div>
        </form>
      </Fade>
    </Modal>
  );
};

export default AddTodoModal;
