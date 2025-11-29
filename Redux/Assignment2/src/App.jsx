import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './redux/UserSlice'

function App() {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.list);
  const status = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);

  // Fetch users on page load
  useEffect(() => {
    dispatch(fetchUsers());

  }, [dispatch])

  return (
    <>
      <div style={{ padding: 40}}>
        <h1>User List</h1>

        <h3>Tatal Users: {users.length}</h3>

        <button onClick={() => dispatch(fetchUsers())}>
          Reload Users
        </button>
        <br />

        {/* Loading State */}
      {status === "loading" && <p>Loading users...</p>}

      {/* Error State */}
      {status === "failed" && <p style={{ color: "red" }}>{error}</p>}

      {/* Success State */}
      {status === "succeeded" && (
        <ul>
          {users.map((u) => (
            <li key={u.id}>
              <strong>{u.name}</strong> - {u.email}
            </li>
          ))}
        </ul>
      )}


      </div>
    </>
  )
}

export default App
