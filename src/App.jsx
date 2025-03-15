import {Routes, Route} from 'react-router'

import Home from './pages/Home'
import About from './pages/About'
import Banner from './components/Banner.jsx'
import Footer from './components/Footer.jsx'
import Housing from './pages/Housing.jsx'
import ErrorPage from './pages/Errorpage.jsx'
import Carrousel from './components/Carrousel.jsx'



function App () {
  return (
    <div class="container-app">
      <Banner />
        <Routes>
            <Route exact path="/" element={<Home />} />   
            <Route path="/About" element={<About />} />
            <Route path="/Housing/:id" element={<Housing />} />
            <Route path="*" element={<ErrorPage/>} />
            <Route path="/Carrousel" element={<Carrousel />} />
        </Routes>
      <Footer />

    </div>
    
    
  );
}
export default App
