import { types } from '../types/types';

export const addTodo = (todo) => {
  return {
    type: types.crear,
    payload: todo,
  };
};
export const deleteTodo = (id) => {
  return {
    type: types.eliminar,
    payload: id,
  };
};
export const deleteTodoAll = () => {
  return {
    type: types.eliminarTodos,
  };
};

export const editTodo = (todoEditar) => {
  return {
    type: types.editar,
    payload: todoEditar,
  };
};
export const completeTodo = (todo) => {
  return {
    type: types.completados,
    payload: todo,
  };
};

export const completeTodoFalse = (id) => {
  return {
    type: types.completadosFalse,
    payload: id,
  };
};

export const activeTodo = (todo) => {
  return {
    type: types.active,
    payload: todo,
  };
};

export const activeTodoFalse = (id) => {
  return {
    type: types.activeFalse,
    payload: id,
  };
};
