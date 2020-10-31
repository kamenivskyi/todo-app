// import React, {
//   useEffect,
//   useState,
//   useCallback,
//   memo,
// } from "react";
// import PropTypes from "prop-types"; 
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { TextField, Typography } from "@material-ui/core";

// import TodoItems from "../../components/TodoItems/TodoItems";
// import { getList, addTodoToTheList } from "../../redux/lists/listsActions";
// import useInput from "../../hooks/useInput";

// const CurrentListPage = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { lists } = useSelector((state) => state.lists);
//   const { title, todos } = lists;
//   const { bind, clearInput } = useInput("");

//   const getListForId = useCallback(() => {
//     dispatch(getList(id));
//   }, [id, getList, dispatch]);
  
//   const addTodo = useCallback((value) => {
//     dispatch(addTodoToTheList(value, id));
//   }, [dispatch, addTodoToTheList, id]);

//   useEffect(() => {
//     getListForId();
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log(bind.value);

//     addTodo(bind.value);
//     clearInput();
//   };

//   // if (!lists) {
//   //   return <span>loading...</span>;
//   // }

//   console.log("todos", todos);
//   console.log('title', title);

//   return (
//     <div>
//       <Typography>{title}</Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField id="standard-basic" label="New todo" fullWidth {...bind} />
//       </form>
//       <TodoItems items={todos} />
//     </div>
//   );
// };

// export default CurrentListPage;



import React, { useEffect, useCallback } from 'react';
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

  console.log('chosenList: ', chosenList);
  
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
