import React from 'react';
import clsx from 'clsx';

import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  InputBase
} from '@material-ui/core';

import { 
  AccountCircle,
  Search, 
  Settings, 
  Menu,
} from '@material-ui/icons';

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
          <Menu />
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
              <Search />
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
              <Settings />
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
