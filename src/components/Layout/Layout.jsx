import React, { useState } from 'react';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { ChevronLeft, ChevronRight, Add } from '@material-ui/icons';
import { 
  IconButton, 
  Drawer, 
  CssBaseline, 
  Divider, 
  ListItem, 
  ListItemIcon,
  TextField,
  useTheme, 
} from '@material-ui/core';

import Header from '../Header/Header';
import Lists from '../Lists/Lists';
import SidebarNav from '../SidebarNav/SidebarNav';
import { addNewList } from '../../redux/lists/listsActions';
import { Routes } from '../../routes';
import useInput from '../../hooks/useInput';
import { useStyles } from './LayoutStyles';

const DrawerLayout = () => {
  const [open, setOpen] = useState(false);
  const { bind, clearInput } = useInput('');
  const lists = useSelector(state => state.lists.lists);
  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const drawerClasses = clsx(classes.drawer, {
    [classes.drawerOpen]: open,
    [classes.drawerClose]: !open,
  });

  const drawerPaperClasses = clsx({
    [classes.drawerOpen]: open,
    [classes.drawerClose]: !open,
  });

  const onAddNewList = (e) => {
    e.preventDefault();

    if (bind.value.trim().length > 2) {
      dispatch(addNewList(bind.value));
      clearInput('');
    }
    else {
      alert('Input field length must be greater 2!');
    }
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer
        variant='permanent'
        className={drawerClasses}
        classes={{ paper: drawerPaperClasses }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRight />
            ) : (
              <ChevronLeft />
            )}
          </IconButton>
        </div>
        <Divider />
        <SidebarNav />
        <Divider />
        <Lists lists={lists} />
        <form onSubmit={onAddNewList}>
          <ListItem>
            <ListItemIcon onClick={handleDrawerOpen}>
              <Add />
            </ListItemIcon>
            <TextField 
              id="standard-basic" 
              label="New list"  
              {...bind}
            />
          </ListItem>
        </form>
      </Drawer>
      <main className={classes.content}>
        <Routes />
      </main>
    </div>
  );
};

export default DrawerLayout;
