export const getExistingList = (arr, id) => {
  const existingList = arr.find(item => item.id === id);

  return existingList;
}

export const addTodoToTheList = (arr, title, listId) => {
  // const list = getExistingList(arr, listId);
  // const listIndex = arr.findIndex(list => list.id === listId);

  const newTodo = { 
    title, 
    id: Math.random(), 
    important: false, 
    done: false
  };

  const newArr = arr.map(item => {
    if (item.id === listId) {
      return { ...item, todos: [...item.todos, newTodo] }
    }
    return item;
  });

  console.log('newArr', newArr)

  // if (list) {
    // const newTodo = { 
    //   title, 
    //   id: Math.random(), 
    //   important: false, 
    //   done: false
    // };

    // const newList = {...list, todos: [...list.todos, newTodo]};
    // console.log("newList", newList);
    return newArr;
  // }
}