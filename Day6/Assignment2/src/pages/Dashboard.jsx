import React from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div style={{padding: 40}}>
      <h1>Dashboard</h1>

     <nav>
      <Link to="/dashboard/profile" style={{marginRight: 10}}>Profile</Link>

       <Link to="/dashboard/profile" style={{marginRight: 10}}>Setting</Link>

        

     </nav>

     <div style={{marginTop: 20}}>
      <Outlet />
     </div>

    </div>
  )
}

export default Dashboard