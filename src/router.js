import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import Home from './pages/Home'
import Error from './components/error'

const Rutas = () => {  
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    )
  }
  
  const Routing = () => {
    return (
        <Rutas/>
    )
  }
  
  export default Routing
  