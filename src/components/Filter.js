import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//TODO list
//* Active
//*local Storage
//* tostify

const Filter = ({ darkModeG }) => {
  const { todos, completados, active } = useSelector(
    (store) => store.todoReducerStore
  );
  const [all, setAll] = useState(false);
  const [completado, setCompletado] = useState(false);
  const [actives, setActives] = useState(false);

  const handleCheck = ({ target }) => {
    console.log(target.id);
    if (target.id === 'allTodos') {
      setAll(!all);
      setCompletado(false);
      setActives(false);
      document.getElementById('compl').classList.remove('tagSelect');
      document.getElementById('allTo').classList.add('tagSelect');
      document.getElementById('act').classList.remove('tagSelect');
    } else if (target.id === 'completado') {
      setCompletado(!completado);
      setAll(false);
      setActives(false);
      document.getElementById('compl').classList.add('tagSelect');
      document.getElementById('allTo').classList.remove('tagSelect');
      document.getElementById('act').classList.remove('tagSelect');
    } else if (target.id === 'active') {
      console.log('aqui estamos');
      setActives(!actives);
      setCompletado(false);
      setAll(false);
      document.getElementById('act').classList.add('tagSelect');
      document.getElementById('compl').classList.remove('tagSelect');
      document.getElementById('allTo').classList.remove('tagSelect');
    }
  };

  return (
    <div className={darkModeG ? 'contFilterDark' : 'contFilter'}>
      <div className='contNav'>
        <ul className='navlist'>
          <li>
            <input
              className='inputTags'
              type='radio'
              id='allTodos'
              name='tags'
              onClick={(e) => {
                handleCheck(e);
              }}
            />
            <label
              htmlFor='allTodos'
              id='allTo'
              className={darkModeG ? 'tagshoverDark' : 'tagshover'}
            >
              All
            </label>
          </li>
          <li>
            <input
              className='inputTags'
              type='radio'
              id='active'
              name='tags'
              onClick={(e) => {
                handleCheck(e);
              }}
            />
            <label
              htmlFor='active'
              id='act'
              className={darkModeG ? 'tagshoverDark' : 'tagshover'}
            >
              Active
            </label>
          </li>
          <li>
            <input
              className='inputTags'
              type='radio'
              id='completado'
              name='tags'
              onClick={(e) => {
                handleCheck(e);
              }}
            />
            <label
              htmlFor='completado'
              className={darkModeG ? 'tagshoverDark' : 'tagshover'}
              id='compl'
            >
              Completed
            </label>
          </li>
        </ul>
      </div>
      <div className='contCardFilter'>
        {all &&
          todos.map((todo) => (
            <div
              className={darkModeG ? 'cardFilterDark' : 'cardFilter'}
              key={todo.id}
            >
              {todo.tarea}
            </div>
          ))}
        {completado &&
          completados.map((comp) => (
            <div
              className={darkModeG ? 'cardFilterDark' : 'cardFilter'}
              key={comp.id}
            >
              {comp.tarea}
            </div>
          ))}
        {actives &&
          active.map((comp) => (
            <div
              className={darkModeG ? 'cardFilterDark' : 'cardFilter'}
              key={comp.id}
            >
              {comp.tarea}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Filter;
