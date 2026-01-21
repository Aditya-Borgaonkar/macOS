import { useState } from 'react'
import './app.scss'
import Dokes from './components/Dokes'
import Nav from './components/Nav'
import GitHub from './components/windows/GitHub'

function App() {
  return (
    <>
      <main>
        <Nav />
        <Dokes />
        <GitHub />
      </main>
    </>
  )
}

export default App
