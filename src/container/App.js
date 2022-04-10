import Home from '../components/Home';
import React, { useState } from 'react';
import TodoList from '../components/TodoList';
import Filter from '../components/Filter';

function App() {
  const [darkModeG, setDarkModeG] = useState(false);

  console.log(darkModeG);

  return (
    <div className={darkModeG ? 'pruebaDark' : 'prueba'}>
      <Home setDarkModeG={setDarkModeG} />
      <TodoList darkModeG={darkModeG} />
      <Filter darkModeG={darkModeG} />
    </div>
  );
}

export default App;
