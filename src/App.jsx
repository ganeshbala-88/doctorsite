

import './index.css'

import Allroutes from './Allroutes'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {


  return (
    <>
      <div className='container'>
      
        <Router>
        
        <Allroutes/>
        </Router>
      </div>
      
    </>
  )
}

export default App
