import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Teachers from './Teachers.jsx'
import Home from './Home.jsx'
import Holidays from './Holidays.jsx'
import Nopage from './Nopage.jsx'

const App = () => {

  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/holidays" element={<Holidays />} />
      <Route path="*" element={<Nopage/>} />
    </Routes>
    </BrowserRouter>
    </>
  
  


  )
}
export default App


