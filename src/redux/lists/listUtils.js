export const addTodoToTheList = (obj) => {
  const { arr, title, idForTodo, listId } = obj;

  const newTodo = { 
    title, 
    id: idForTodo, 
    important: false, 
    done: false
  };

  const newArr = arr.map(item => {
    if (item.id === listId) {
      return { ...item, todos: [...item.todos, newTodo] }
    }
    return item;
  });


  return newArr;
}