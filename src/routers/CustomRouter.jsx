import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import TeamPage from '../pages/TeamPage'
import ContactPage from '../pages/ContactPage'
import ServicePage from '../pages/ServicePage'

const CustomRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/team' element={<TeamPage/>}></Route>
        <Route path='/services/:serviceName' element={<ServicePage/>}></Route>
        <Route path='/contact' element={<ContactPage/>}></Route>
      </Routes>
      <div>
      </div>
    </div>
  )
}

export default CustomRouter
