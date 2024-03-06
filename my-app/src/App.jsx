import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Display from './component/Display'
import AddUser from './component/addUser'
import Update from './component/Update'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddUser/>}/>
      <Route path='/display' element={<Display/>}/>
      <Route path='/update/:id' element={<Update/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
