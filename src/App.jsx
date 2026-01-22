import { useState } from 'react'
import './app.scss'
import Dokes from './components/Dokes'
import Nav from './components/Nav'
import GitHub from './components/windows/GitHub'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
// import Spotify from './components/windows/Spotify'

function App() {
  return (
    <>
      <main>
        <Nav />
        <Dokes />
        <GitHub />
        <Note />

        <Resume />
        {/* <Spotify /> */}
      </main>
    </>
  )
}

export default App
