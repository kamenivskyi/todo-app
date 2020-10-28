import React, { useState } from 'react';
import { connect } from 'react-redux';

import DrawerLayout from './components/DrawerLayout/DrawerLayout';

// import AddTodoModal from './components/AddTodoModal/AddTodoModal';

import './App.css';

function App() {
  // const [open, setOpen] = React.useState(false);

  // const handleModalOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div className='App'>
      <DrawerLayout 
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  lists: state.lists,
})

export default connect(mapStateToProps)(App);
