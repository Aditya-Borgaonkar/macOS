import { useState } from 'react'
import './app.scss'
import Dokes from './components/Dokes'
import Nav from './components/Nav'
function App() {
  return (
    <>
      <main>
        <Nav />
        <Dokes />
      </main>
    </>
  )
}

export default App
