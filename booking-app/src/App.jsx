import './App.css'
import Bookdetail from './Components/Book/Bookdetail'
import Home from './Components/Home'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import Addbook from './Components/Addbook'
import Books from './Components/Book/Books'
import About from './Components/About'
function App() {

  return (
   <div>
<header>
  <Header/>
</header>
<main>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/add' element={<Addbook/>} />
    <Route path='/books' element={<Books/>} />
    <Route path='/about' element={<About/>} />
    <Route path="/book/:id" element={<Bookdetail/>} />





  </Routes>
</main>
   </div> 
  )
}

export default App
