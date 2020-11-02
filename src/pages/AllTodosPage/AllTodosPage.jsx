import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TodoItems from '../../components/TodoItems/TodoItems';

const AllTodosPage = () => {
  const lists = useSelector((state) => state.lists.lists);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, [])

const getTodos = () => {
  const todoArr = [];

  lists && lists.map(list => 
    list.todos.map(todo => todoArr.push(todo))
  );

  setTodos(todoArr);
};

  return (
    <div>
      All todos page
      <TodoItems items={todos} />
    </div>
  );
};

export default AllTodosPage;
