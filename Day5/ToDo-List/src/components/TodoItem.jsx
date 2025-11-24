import React, { useState } from 'react'

function TodoItem({todo, onToggle, onDelet, onEdit}) {

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if(editText.trim() === '') {
      alert('Todo cannot be empty!');
      return;
    }
    onEdit(editText);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      handleEdit();
    } else if(e.key === 'Escape'){
      handleCancel();
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([],{
      hour: '2-digit',
      minute: '2-digit'
    });
  };


  return (
    <div>
      <li className={`todo-item ${todo-completed ? 'completed' : ''}`}>
        <div className='todo-content'>
          <input type="checkbox" 
            checked = {todo.completed}
            onChange={onToggle}
            className='todo-checkbox'
          />

          {isEditing ? (
            <div className='edit-section'>
              <input type='text'
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyPress={handleKeyPress}
                className='edit-input'
                autoFocus
                maxLength="100"
              />
              <div className='edit-buttons'>
                <button onClick={handleEdit} className='save-btn'>
                  ✍️
                </button>
                <button onClick={handleCancel} className='cancel-btn'>
                  X
                </button>
              </div>
            </div>
          ) : (
            <div className='display-section'>
              <samp className='todo-text' 
               onDoubleClick={() => !todo.completed && setIsEditing(true)}
              >
                {todo.text}
              </samp>

              <div className=' todo-actions'>
                {!todo.completed && (
                  <button 
                   onClick={() => setIsEditing(true)}
                   className='edit-btn'
                   title='Edit todo'
                  > 
                   📝
                  </button>
                )}
                <button
                  onClick={onDelet}
                  className='delete-btn'
                  title='Delete todo'
                > 🗑️
                </button>
              </div>
            </div>
          )}
        </div>
      
      <div className='todo-meta'>
        <small>Created: {formatDate(todo.createdAt)}</small>
      </div>

      </li>
    </div>
  )
}

export default TodoItem