import React from 'react';
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
// import TextField from '@material-ui/core/TextField';
// import FormControl from '@material-ui/core/FormControl';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import MenuIcon from '@material-ui/icons/Menu';

import { useStyles } from './HeaderStyles';

const Header = ({ open, handleDrawerOpen }) => {
  const classes = useStyles();

  const appBarClasses = clsx(classes.appBar, {
    [classes.appBarShift]: open,
  });

  const iconButtonClasses = clsx(classes.menuButton, {
    [classes.hide]: open,
  });

  return (
    <AppBar
      position='fixed'
      color='primary'
      style={{ backgroundColor: '#346fef' }}
      className={appBarClasses}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerOpen}
          edge='start'
          className={iconButtonClasses}
        >
          <MenuIcon />
        </IconButton>
        <div
          style={{
            flexGrow: '1',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconButton style={{ color: 'white' }}>
              <SettingsIcon />
            </IconButton>
            <IconButton style={{ color: 'white' }}>
              <AccountCircle />
            </IconButton>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
