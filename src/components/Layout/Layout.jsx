import React, { useState } from 'react';
import clsx from 'clsx';
import { connect, useSelector } from 'react-redux';
import { Switch, Route, NavLink, useLocation, Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { TextField } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import { useStyles } from './LayoutStyles';

// import TodoItems from '../TodoItems/TodoItems';

import Header from '../Header/Header';
import Lists from '../Lists/Lists';
import { addNewList } from '../../redux/lists/listsActions';
import HomePage from '../../pages/HomePage';
import CurrentListPage from '../../pages/CurrentListPage/CurrentListPage';

const DrawerLayout = ({ dispatch }) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const classes = useStyles();
  const theme = useTheme();
  const location = useLocation();
  const lists = useSelector(state => state.lists.lists);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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

    if (inputValue.trim().length > 2) {
      dispatch(addNewList(inputValue));
      setInputValue('');
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
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <NavLink to='/all'>
            <ListItem button>
              <ListItemIcon>
                <AllInclusiveIcon />
              </ListItemIcon>
              <ListItemText primary='All' />
            </ListItem>
          </NavLink>
          <NavLink to='/done'>
            <ListItem button>
              <ListItemIcon>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary='Done' />
            </ListItem>
          </NavLink>
          <NavLink to='/important'>
            <ListItem button>
              <ListItemIcon>
                <StarBorderIcon />
              </ListItemIcon>
              <ListItemText primary='Important' />
            </ListItem>
          </NavLink>
          <NavLink to='/active'>
            <ListItem button>
              <ListItemIcon>
                <FormatListBulletedIcon />
              </ListItemIcon>
              <ListItemText primary='Active' />
            </ListItem>
          </NavLink>
          <NavLink to='/tasks'>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary='Tasks' />
            </ListItem>
          </NavLink>
        </List>
        <Divider />

        <Lists lists={lists} />

        <form onSubmit={onAddNewList}>
          <ListItem>
            <ListItemIcon onClick={handleDrawerOpen}>
              <AddIcon />
            </ListItemIcon>
            <TextField 
              id="standard-basic" 
              label="New list"  
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
          </ListItem>
        </form>
      </Drawer>
      <main className={classes.content}>
        <Switch>
          {location.pathname === '/' && <Redirect to='/tasks' />}
          <Route exact component={HomePage} path='/tasks' />
          <Route component={CurrentListPage} path='/lists/:id' />
        </Switch>
      </main>
    </div>
  );
};

export default connect()(DrawerLayout);
