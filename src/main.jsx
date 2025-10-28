
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router'
import './index.css'
import Home from './Home.jsx'
import RadioPlayer from './Components/RadioPlayer.jsx'
import NavBar from './Components/NavBar.jsx'
import Footer from './Components/Footer.jsx'
import EventsRoute from './Routes/EventsRoute.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='events' element={<EventsRoute/>}/>
    </Routes>
    <Footer/>
    <RadioPlayer/>
  </BrowserRouter>,
)
