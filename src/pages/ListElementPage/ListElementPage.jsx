import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { TextField, Typography } from '@material-ui/core';

import TodoItems from '../../components/TodoItems/TodoItems';
import { getList } from '../../redux/lists/listsActions';


const ListElementPage = ({ list, getList }) => {
  const { id } = useParams();

  useEffect(() => {
    getList(id);
  }, [id]);

  return (
    <div>
      <Typography>{list?.title}</Typography>
      <TextField id="standard-basic" label="New todo" />
      <TodoItems items={list?.todos} />
    </div>
  )
};


const mapStateToProps = (state) => ({
  list: state.lists.listElement
});
    
ListElementPage.propTypes = {
  list: PropTypes.shape({
    title: PropTypes.string,
    todos: PropTypes.array,
  }),
};

export default connect(mapStateToProps, { getList })(ListElementPage);
