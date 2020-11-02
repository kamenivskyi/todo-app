import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TextField, Typography } from '@material-ui/core';

import TodoItems from '../../components/TodoItems/TodoItems';
import { getListById, addTodoToTheList } from '../../redux/lists/listsActions';
import useInput from '../../hooks/useInput';

const CurrentListPage = () => {
  const { id } = useParams();
  const { bind, clearInput } = useInput('');
  const lists = useSelector((state) => state.lists.lists);
  const dispatch = useDispatch();

  const chosenList = lists.find(list => list.id === id);
  
  useEffect(() => {
    dispatch(getListById(id));
  }, [id, dispatch, getListById]);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodoToTheList(bind.value, id));
    clearInput();
  }

  // console.log('chosenList: ', chosenList);
  
  return (
    <div>
      <Typography>{chosenList?.title}</Typography>
      <form onSubmit={handleSubmit}>
        <TextField 
          id="standard-basic" 
          label="New todo" 
          fullWidth
          {...bind} 
        />
      </form>
      <TodoItems items={chosenList?.todos} />
    </div>
  )
};
    
CurrentListPage.propTypes = {
  list: PropTypes.shape({
    title: PropTypes.string,
    todos: PropTypes.array,
  }),
};

export default CurrentListPage;
