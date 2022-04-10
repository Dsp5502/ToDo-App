import { types } from '../types/types';

const initialState = {
  todos: [],
  completados: [],
  active: [],
};

export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.crear:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case types.editar:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    case types.eliminar:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case types.eliminarTodos:
      return {
        ...state,

        completados: [],
      };
    case types.completados:
      return {
        ...state,

        completados: [...state.completados, action.payload],
      };
    case types.completadosFalse:
      return {
        ...state,
        completados: state.completados.filter(
          (todo) => todo.id !== action.payload
        ),
      };
    case types.active:
      return {
        ...state,

        active: [...state.active, action.payload],
      };
    case types.activeFalse:
      return {
        ...state,
        active: state.active.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};
