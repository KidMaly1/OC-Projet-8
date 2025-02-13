import {Routes, Route} from 'react-router'


function App () {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />   
      <Route path="/About" element={<About />} /> 
    </Routes>

  );
}
export default App
