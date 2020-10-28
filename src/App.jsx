import React, { useState } from 'react';

import DrawerLayout from './components/DrawerLayout/DrawerLayout';
import AddTodoModal from './components/AddTodoModal/AddTodoModal';

import './App.css';

function App() {
  const [lists, setLists] = useState([]);
  const [open, setOpen] = React.useState(false);

  const addNewList = (title) => {
    const list = {
      title,
      id: Math.random(),
      todos: [],
    };

    setLists([...lists, list]);
  }

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='App'>
      <DrawerLayout 
        handleModalOpen={handleModalOpen} 
        addNewList={addNewList} 
        lists={lists} 
      />
      <AddTodoModal open={open} handleClose={handleClose} />
    </div>
  );
}

export default App;
