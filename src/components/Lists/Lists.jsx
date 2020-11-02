import React from 'react'
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { 
  ListItemText, 
  ListItemIcon, 
  ListItem, 
  List
} from '@material-ui/core';

import ListIcon from '@material-ui/icons/List';

const Lists = ({ lists }) => (
  <List>
    {lists?.map((list) => {
      return (
        <NavLink to={`/lists/${list.id}`} key={`list-${list.id}`}>
          <ListItem button>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary={list.title} />
          </ListItem> 
        </NavLink>
      )
    })}
  </List>
);

React.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    todos: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string,
      important: PropTypes.bool,
      done: PropTypes.bool,
    })),
  })),
};

React.defaultProps = {
  lists: [],
};

export default Lists;
