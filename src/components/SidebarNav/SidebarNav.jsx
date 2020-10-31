import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText 
} from '@material-ui/core';
import { 
  Home,
  CheckCircleOutline, 
  StarBorder, 
  FormatListBulleted, 
  AllInclusive
} from '@material-ui/icons';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
// import AllInclusiveIcon from '@material-ui/icons/AllInclusive';

const SidebarNav = () => {
  return (
    <List>
      <NavLink to='/all'>
        <ListItem button>
          <ListItemIcon>
            <AllInclusive />
          </ListItemIcon>
          <ListItemText primary='All' />
        </ListItem>
      </NavLink>
      <NavLink to='/done'>
        <ListItem button>
          <ListItemIcon>
            <CheckCircleOutline />
          </ListItemIcon>
          <ListItemText primary='Done' />
        </ListItem>
      </NavLink>
      <NavLink to='/important'>
        <ListItem button>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon>
          <ListItemText primary='Important' />
        </ListItem>
      </NavLink>
      <NavLink to='/active'>
        <ListItem button>
          <ListItemIcon>
            <FormatListBulleted />
          </ListItemIcon>
          <ListItemText primary='Active' />
        </ListItem>
      </NavLink>
      <NavLink to='/tasks'>
        <ListItem button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary='Tasks' />
        </ListItem>
      </NavLink>
    </List>
  );
};

export default SidebarNav;
