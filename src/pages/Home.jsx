import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container">
      <Link to={'/usuarios'}>
        <button className="btn btn-primary mx-2 mt-2">Usuarios</button>
      </Link>
      <Link to={'/tareas'}>
        <button className="btn btn-primary mx-2 mt-2">Tareas</button>
      </Link>
    </div>
  )
}

export default Home
