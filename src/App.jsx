import { Route, Routes } from 'react-router-dom';
import Router from './routers/router';
function App() {

  return (
    <>
      <Routes>
        <Route path='/*' element={<Router />} />
      </Routes>
    </>
  )
}

export default App
