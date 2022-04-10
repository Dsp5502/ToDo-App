import { faClose, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  activeTodo,
  activeTodoFalse,
  completeTodo,
  completeTodoFalse,
  deleteTodo,
  deleteTodoAll,
  editTodo,
} from '../actions/TodoActions';

const TodoList = ({ darkModeG }) => {
  const { todos, completados } = useSelector((store) => store.todoReducerStore);
  const dispatch = useDispatch();
  console.log(todos);

  //* funcion para eliminar todas las tareas completas  y mostrar un Alerta de confirmacion */

  const eliminarALl = (completados) => {
    dispatch(deleteTodoAll());
    completados.map((to) => dispatch(deleteTodo(to.id)));

    toast.error('Clear Completed!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Zoom,
      theme: `${darkModeG ? 'dark' : 'colored'}`,
    });
  };

  const eliminarOne = (id) => {
    console.log(id);
    dispatch(deleteTodo(id));
    dispatch(completeTodoFalse(id));
    dispatch(activeTodoFalse(id));
    toast.error('Eliminado Correctamente!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Zoom,
      theme: `${darkModeG ? 'dark' : 'colored'}`,
    });
  };

  const active = (todo, e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      dispatch(activeTodoFalse(todo.id));
      toast.info('Completed!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Zoom,
        theme: `${darkModeG ? 'dark' : 'light'}`,
      });
    } else {
      dispatch(activeTodo(todo));
      toast.info('Active!', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Zoom,
        theme: `${darkModeG ? 'dark' : 'light'}`,
      });
    }
  };

  const complete = (todo, e) => {
    if (e.target.checked) {
      dispatch(completeTodo(todo));

      document.getElementById(todo.id).style.textDecoration = 'line-through';
      document.getElementById(todo.id).style.color = 'gray';
    } else {
      dispatch(completeTodoFalse(todo.id));
      document.getElementById(todo.id).style.textDecoration = 'none';
      document.getElementById(todo.id).style.color = 'none';
    }
  };
  //* Editar una tarea  y mostrar un Alerta de confirmacion */
  const editarOne = (todo) => {
    Swal.fire({
      title: 'Modify your Task ',
      input: 'text',
      inputValue: todo.tarea,
      showCancelButton: true,
      confirmButtonText: 'Edit',
      cancelButtonText: 'Cancel',
      customClass: {
        popup: 'colored-toastDark',
      },

      inputValidator: (value) => {
        if (!value) {
          return 'you must enter a task!!!';
        }
      },
    }).then((result) => {
      if (result.value) {
        console.log(result.value);
        dispatch(editTodo({ ...todo, tarea: result.value }));
        toast.info('Successfully Modified!', {
          position: 'top-center',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Zoom,
          theme: `${darkModeG ? 'dark' : 'light'}`,
        });
      }
    });
  };

  return (
    <div className={darkModeG ? 'contTodoListDark' : 'contTodoList'}>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={darkModeG ? 'todoSelectDark' : 'todoSelect'}
        >
          <input
            type='checkbox'
            name={todo.tarea}
            onClick={(e) => {
              complete(todo, e);
              active(todo, e);
            }}
          />

          <span id={todo.id}>{todo.tarea}</span>
          <div className='iconos'>
            <FontAwesomeIcon
              className={darkModeG ? 'iconoDark' : 'icono'}
              onClick={() => {
                editarOne(todo);
              }}
              icon={faPenToSquare}
            />
            <FontAwesomeIcon
              className={darkModeG ? 'iconoDark' : 'icono'}
              onClick={() => {
                eliminarOne(todo.id);
              }}
              icon={faClose}
            />
          </div>
        </div>
      ))}
      <div className={darkModeG ? 'datosTodosDark' : 'datosTodos'}>
        <p>{todos.length} items left</p>
        <p
          className={darkModeG ? 'clearHoverDark' : 'clearHover'}
          onClick={() => {
            eliminarALl(completados);
          }}
        >
          Clear Completed
        </p>
      </div>
    </div>
  );
};

export default TodoList;
