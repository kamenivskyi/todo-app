import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import { Typography } from '@material-ui/core';

import { useStyles } from './TodoItemsStyles';

const TodoItems = ({ items }) => {
  const classes = useStyles();
  const [checked, setChecked] = useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  if (items && items.length === 0) {
    return (
      <Typography variant='h6'>
        No todos yet
      </Typography>
    )
  }

  return (
    <List className={classes.root}>
      {items && items.map((item) => {
        const labelId = `checkbox-list-label-${item.title}`;

        return (
          <ListItem
            key={item.id}
            role={undefined}
            dense
            button
            onClick={handleToggle(item)}
          >
            <ListItemIcon>
              <Checkbox
                edge='start'
                checked={checked.indexOf(item) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={item.title} />
            <ListItemSecondaryAction>
              <IconButton edge='end' aria-label='comments'>
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TodoItems;
