import React, { useState } from 'react';
import clsx from 'clsx';
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

import Header from '../Header/Header';
import ListItems from '../ListItems/ListItems';
import { useStyles } from './DrawerLayout.styles';
import Lists from '../Lists/Lists';

const DrawerLayout = ({ handleModalOpen, addNewList, lists }) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const classes = useStyles();
  const theme = useTheme();

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
      addNewList(inputValue);
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
          <ListItem button>
            <ListItemIcon>
              <CheckCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary='Complited' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <StarBorderIcon />
            </ListItemIcon>
            <ListItemText primary='Important' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FormatListBulletedIcon />
            </ListItemIcon>
            <ListItemText primary='Active' />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='All' />
          </ListItem>
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
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          doloribus autem corrupti cum aspernatur, doloremque a, quis aliquid,
          neque deserunt rem fugiat. Doloremque quae sunt autem voluptatum
          veritatis vero fuga.
        </Typography>
      </main>
    </div>
  );
};

export default DrawerLayout;
