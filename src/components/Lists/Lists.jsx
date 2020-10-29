import React from 'react'
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListIcon from '@material-ui/icons/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const Lists = ({ lists }) => {
  return (
    <List>
      {lists.map((list) => {
        return (
          <NavLink to={`/lists/${list.id}`} key={list.id}>
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
  )
};

React.propTypes = {
  lists: PropTypes.array,
};

React.defaultProps = {
  lists: [],
}

export default Lists
