import { Route, Routes } from 'react-router-dom';
import CustomRouter from './routers/CustomRouter';
function App() {

  return (
    <>
      <Routes>
        <Route path='/*' element={<CustomRouter />} />
      </Routes>
    </>
  )
}

export default App
