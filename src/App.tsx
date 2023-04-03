import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
  },[])
  return (
    <div className="App">
      Hello Word
    </div>
  );
}

export default App;
