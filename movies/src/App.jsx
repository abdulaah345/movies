import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header'
import {BrowserRouter as Router ,Routes , Route} from "react-router-dom"
import Watchlist from './component/Watchlist'
import Watched from './component/Watched'
import Add from './component/Add'
import ContextProvider from './component/context/Glopalcontext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <ContextProvider>
    <Header/>
    <Routes>
      <Route path='/' element={<Watchlist/>} />
      <Route path='/watched' element={<Watched/>} />
      <Route path='/add' element={<Add/>} />

    </Routes>
    </ContextProvider>
    </Router>
    </>
  )
}

export default App
