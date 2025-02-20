import {Routes, Route} from 'react-router'

import Home from './pages/Home'
import About from './pages/About'
import Banner from './components/Banner.jsx'
import Footer from './components/Footer.jsx'
import Crash from './pages/Crash.jsx'



function App () {
  return (
    <div class="container-app">
      <Banner></Banner>
        <Routes>
            <Route exact path="/" element={<Home />} />   
            <Route path="/About" element={<About />} />
            <Route path="/Crash" element={<Crash/>} />
        </Routes>
      <Footer></Footer>

    </div>
    
    
  );
}
export default App
