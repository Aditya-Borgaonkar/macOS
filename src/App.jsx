import { useState } from 'react'
import './app.scss'
import Dokes from './components/Dokes'
import Nav from './components/Nav'
import GitHub from './components/windows/GitHub'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

function App() {
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  })
  return (
    <>
      <main>
        <Nav />
        <Dokes windowsState={windowsState} setWindowsState={setWindowsState} />
        {windowsState.github && <GitHub windowName="github" setWindowsState={setWindowsState} windowsState={windowsState} />}
        {windowsState.note && <Note windowName="note" setWindowsState={setWindowsState} windowsState={windowsState} />}
        {windowsState.resume && <Resume windowName="resume" setWindowsState={setWindowsState} windowsState={windowsState} />}
        {windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState} windowsState={windowsState} />}
        {windowsState.cli && <Cli windowName="cli" setWindowsState={setWindowsState} windowsState={windowsState} />}
      </main>
    </>
  )
}

export default App
