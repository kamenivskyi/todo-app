import React from 'react';

import DrawerLayout from './components/DrawerLayout/DrawerLayout';
import AddTodoModal from './components/AddTodoModal/AddTodoModal';

import './App.css';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='App'>
      <DrawerLayout handleModalOpen={handleModalOpen} />
      <AddTodoModal open={open} handleClose={handleClose} />
    </div>
  );
}

export default App;
