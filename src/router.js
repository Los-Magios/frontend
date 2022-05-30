import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/login'

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Login />} />
      </Routes>
    </Router>
  )
}

const Routing = () => {
  return <Rutas />
}

export default Routing
