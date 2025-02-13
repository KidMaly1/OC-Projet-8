/* 
MAIN.JSX

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

APP.JSX

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Page1 from './pages/Pageone.jsx';
import Page2 from './pages/Pagetwo.jsx';

function App () {
  return (
    <>
    <h1>Aloha & Welcome, Tit' 🏝️🤩✈️</h1>
    <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/page1' element={<Page1></Page1>} ></Route>
      <Route path='/page2' element={<Page2></Page2>} ></Route>
    </Routes>
    </>
  );
}

export default App

*/

