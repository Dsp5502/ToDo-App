import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/TodoActions';
import { useForm } from '../hooks/UseForm';
import uuid from 'react-uuid';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  getLocalStorageDark,
  saveLocalStorageDark,
} from '../utils/LocalStorageDark';

const Home = ({ setDarkModeG }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [formValue, handleInputChange, reset] = useForm({
    tarea: '',
  });
  useEffect(() => {
    const storageDark = getLocalStorageDark();
    if (storageDark) {
      setDarkMode(storageDark.darkMode);
    }
  }, []);

  useEffect(() => {
    saveLocalStorageDark({ darkMode });
  }, [darkMode]);

  const dispatch = useDispatch();

  //* funcion para agregar una tarea */

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Agregado Correctamente!', {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      transition: Zoom,
      theme: `${darkMode ? 'dark' : 'colored'}`,
    });
    console.log(formValue);
    dispatch(addTodo({ ...formValue, id: uuid() }));

    reset();
  };
  console.log(darkMode);
  useEffect(() => {
    setDarkModeG(darkMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [darkMode]);

  //* Dark mode on  cuando el usuario hace click en el icono de la luna
  //* Dark mode off cuando el usuario hace click en el icono de la sol */

  return (
    <div className={darkMode ? 'fondoDark' : 'fondo'}>
      <div className='containerTitulo'>
        <h1>TODO</h1>
        <div>
          {darkMode ? (
            <FontAwesomeIcon
              onClick={() => {
                setDarkMode(!darkMode);
              }}
              icon={faSun}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => setDarkMode(!darkMode)}
              icon={faMoon}
            />
          )}
        </div>
      </div>
      <form onSubmit={handleSubmit} className='inputTodo'>
        <input
          type='text'
          name='tarea'
          value={formValue.tarea}
          className={darkMode ? 'iTodoDark' : 'iTodo'}
          placeholder='Create a new todo...'
          onChange={handleInputChange}
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default Home;
