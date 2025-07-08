import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (!title.trim() || !desc.trim()) return;
    setTodos([...todos, { title, desc }]);
    setTitle('');
    setDesc('');
  };

  const handleDelete = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="app-wrapper">
      <div className="container">
        <h1>React TODO App</h1>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add TODO</button>

        <div className="todo-list">
          {todos.map((todo, index) => (
            <div key={index} className="todo">
              <h3>{todo.title}</h3>
              <p>{todo.desc}</p>
              <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
