import React from 'react'
import TodoItem from './TodoItem';

function TodoList({todos, onToggleTodo, onDeleteTodo, onEditTodo}) {
  if(todos.length === 0) {
    return(
    <div className='empty-state'>
      <div className='empty-icon'></div>
      <h3>No todos yet!</h3>
      <p>Add a todo above to get started with your tasks.</p>
    </div>
    );
  }
  return (
    <div className='todo-list-container'>
      <ul className='todo-list'>
        {todos.map(todo => (
          <TodoItem 
          key={todo.id}
          todo={todo}
          onToggle={() => onToggleTodo(todo.id)}
          onDelete={() => onDeleteTodo(todo.id)}
          onEdit = {(newText) => onEditTodo(todo.id, newText)}
          />
        ))}
      </ul>
         
    </div>
  )
}

export default TodoList