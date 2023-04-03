import  { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then(response => response.json())
      .then(json => console.log(json.slice(0,10)))
  },[])
  return (
    <div className="App">
      Hello Word
    </div>
  );
}

export default App;
