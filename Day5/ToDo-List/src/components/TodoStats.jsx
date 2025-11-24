import React from 'react'

function TodoStats({todos, onClearCompleted}) {
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  if(totalTodos === 0){
    return null;
  }

  const completionPercentage = totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0;

  const handleClearCompleted = () => {
    if(completedTodos === 0) return;
    const confirmClear = window.confirm(
      `Are you sure you want to delete ${completedTodos} completed todo(s)?`
    );
    if(confirmClear){
      onClearCompleted();
    }
  };

  return (
    <div className='todo-stats'>
     <div className='stats-summary'>
      <div className='stat-item'>
        <span className='stat-number'>{totalTodos}</span>
        <span className='stat-label'>Total</span>
      </div>
      <div className='stat-item'>
        <span className='stat-number'>{activeTodos}</span>
        <span className='stat-label'>Active</span>
      </div>
      <div className='stat-item'>
        <span className='stat-number'>{completedTodos}</span>
        <span className='stat-label'>Done</span>
      </div>
     </div>
     <div className='Progress-section'>
      <div className='progress-label'>
        Progress: {completionPercentage}% complete
      </div>
      <div className='progress-bar'>
        <div className='progress-fill' 
          style={{width: `${completionPercentage}%`}}
        ></div>
      </div>
     </div>
       
       {completedTodos > 0 && (
        <div className='clear-section'>
          <button onClick={handleClearCompleted} className='clear-completed-btn'>
            Clear Completed({completedTodos})
          </button>
        </div>
       )}

    </div>
  )
}

export default TodoStats