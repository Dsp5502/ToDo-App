export const getLocalStorage = () => {
  const TodoStorage = localStorage.getItem('todo');
  if (TodoStorage === null) {
    return undefined;
  }
  return JSON.parse(TodoStorage);
};

export const saveLocalStorage = (state) => {
  const todoState = JSON.stringify(state);

  localStorage.setItem('todo', todoState);
};
