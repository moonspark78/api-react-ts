import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json)
    .then(res => console.log(res))
  },[])
  return (
    <div className="App">
      Hello Word
    </div>
  );
}

export default App;
