import React from 'react';
import { useSelector } from 'react-redux';
import TodoItems from '../components/TodoItems/TodoItems';

const HomePage = () => {
  const items = useSelector(state => state.lists.lists);
  // console.log(items);

  return (
    <>
      <h1>Home page</h1>
      <TodoItems />
    </>
  )
};

export default HomePage;
