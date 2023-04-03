import  { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [todos, setTodos] = useState([])

  interface Todo {
    title : string;
    id: number;
    completed: boolean;
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then(response => response.json())
      .then(json => setTodos(json.slice(0,10)))
      .catch(err => console.log(err)) 
  },[])
  return (
    <div className="App">
      {todos.length > 0 ? todos.map((todo: Todo) => console.log(todo.title)) : ("Loading...")}
    </div>
  );
}

export default App;
