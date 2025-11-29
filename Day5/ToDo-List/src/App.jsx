import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoStats from './components/TodoStats';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if(savedTodos){
      try{
        setTodos(JSON.parse(savedTodos));
      } catch (error){
       console.error('Error loading todos:', error);
       setTodos([]);
      }
      
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todoText) => {
    if(todoText.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text: todoText.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  cosnt toggleTodo = (todoId) => {
    setTodos(prevTodos => 
   prevTodos.map(todo => 
    todo.id === todoId
    ? {...todo, completed: !todo.completed}
    : todo
   )
    );
  };

  const deleteTodo = (todoId) => {
    setTodos(prevTodos => 
      prevTodos.filter(todo => todo.id !== todoId)
    );
  };

  const editTodo = (todoId, newText) => {
    if(newText.trim() === '') return;
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === todoId
        ? {...todo, text: newText.trim()}
        :todo
      )
    );
  };

  const clearCompleted = () =>{
    setTodos(prevTodos => 
      prevTodos.filter(todo => !todo.completed)
    );
  };

  return (
    <>
     <div className='app'>
      <div className='todo-container'>
        <header className='app-header'>
          <h1>My Todo App</h1>
          <p>Keep track of your daily tasks</p>
        </header>
      <TodoForm onAddTodo = {addTodo} />

      <TodoList 
      
      todos={todos}
      onToggleTodo={toggleTodo}
      onDeleteTodo={deleteTodo}
      onEditTodo={editTodo}

      />

      <TodoStats 
      todos={todos}
      onClearCompleted={clearCompleted}
      />

      </div>
     </div>

    
    </>
  )
}

export default App
