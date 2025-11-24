import React, { useState } from 'react'

function TodoForm() {

  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim() === ''){
      alert('Please enter a todo item!');
      return;
    }
    if(inputValue.length > 100) {
      alert('Todo is too long!');
      return;
    }
    onAddTodo(inputValue);
    setInputValue('');
  };


  return (
    <div>
       <form className='todo-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <input type="text" 
           value={inputValue}
           onChange={(e) => setInputValue(e.target.value)}
           placeholder='What do you need to do?'
           className='todo-input'
           maxLength="100"
          />
          <button 
           type='submit'
           className='add-button'
           disabled = {inputValue.trim() === ''}
          >
            Add Todo
          </button>
        </div>
        </form> 
    </div>
  )
}

export default TodoForm