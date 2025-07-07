import { useState } from 'react'
import {Route,Routes,BrowserRouter} from "react-router"
import './App.css'
import Testpage from './pages/Testpage'
import Result from './pages/Result'

function App() {
  

  return (<div>
    <BrowserRouter>
    <Routes>
      <Route path='/questions' element={<Testpage></Testpage>}></Route>
      <Route path='/result' element={<Result></Result>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
