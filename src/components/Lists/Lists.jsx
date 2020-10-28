import React from 'react'
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
          <ListItem button key={list.id}>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary={list.title} />
          </ListItem> 
        )
      })}
    </List>
  )
}

export default Lists
