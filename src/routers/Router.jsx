import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import TeamPage from '../pages/TeamPage'
import ContactPage from '../pages/ContactPage'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/team' element={<TeamPage/>}></Route>
        <Route path='/contact' element={<ContactPage/>}></Route>
      </Routes>
      <div>
      </div>
    </div>
  )
}

export default Router
