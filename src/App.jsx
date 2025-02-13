import {Routes, Route} from 'react-router'
import Home from './pages/Home'
import About from './pages/About'


function App () {
  return (
    
    <Routes>
      <Route exact path="/" element={<Home />} />   
      <Route path="/About" element={<About />} /> 
    </Routes>
    
  );
}
export default App
