import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TextField, Typography } from '@material-ui/core';

import TodoItems from '../../components/TodoItems/TodoItems';
import { getList, addTodoToTheList } from '../../redux/lists/listsActions';
import useInput from '../../hooks/useInput';

const CurrentListPage = ({ list, getList, addTodoToTheList }) => {
  const { id } = useParams();
  const { bind, clearInput } = useInput('');
  
  useEffect(() => {
    getList(id);
  }, [id]);
  
  useEffect(() => {
    getList(id)
  });
  
  if (!list) {
    return null;
  }
  
  const { title, todos } = list;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(bind.value);

    addTodoToTheList(bind.value, id);
    clearInput();
  }

  console.log('list: ', list);
  
  return (
    <div>
      <Typography>{title}</Typography>
      <form onSubmit={handleSubmit}>
        <TextField 
          id="standard-basic" 
          label="New todo" 
          fullWidth
          {...bind} 
        />
      </form>
      <TodoItems items={todos} />
    </div>
  )
};


const mapStateToProps = (state) => ({
  list: state.lists.currentList
});
    
CurrentListPage.propTypes = {
  list: PropTypes.shape({
    title: PropTypes.string,
    todos: PropTypes.array,
  }),
};

export default connect(mapStateToProps, { getList, addTodoToTheList })(CurrentListPage);
