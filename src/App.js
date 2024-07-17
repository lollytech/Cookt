import React from 'react'
import Nav from './Component/NavPageComponent/Nav'
import Main from './Component/MainComponent/Main'
import Menu from './Component/MenuComponent/Menu'
import About from './Component/AboutComponent/About'
import Ourguest from './Component/OurGuestComponent/Ourguest'
function App() {
  return (
    <div className=' w-full h-full'>
      <Nav/>
      <Main/>
      <Menu/>
      <About/>
      <Ourguest/>
    </div>
  )
}

export default App
