import { useState } from 'react'
import './app.scss'
import Dokes from './components/Dokes'
import Nav from './components/Nav'
import GitHub from './components/windows/GitHub'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'

function App() {
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
    mail: false,
    calender: false,
  })

  const [zIndices, setZIndices] = useState({
    github: 1,
    note: 1,
    resume: 1,
    spotify: 1,
    cli: 1,
    mail: 1,
    calender: 1,
  })

  const [maxZIndex, setMaxZIndex] = useState(10)

  const bringToFront = (windowName) => {
    setMaxZIndex(prev => prev + 1)
    setZIndices(prev => ({
      ...prev,
      [windowName]: maxZIndex + 1
    }))
  }

  const handleOpenWindow = (windowName) => {
    setWindowsState({ ...windowsState, [windowName]: true })
    bringToFront(windowName)
  }

  return (
    <>
      <main>
        <Nav />
        <Dokes windowsState={windowsState} setWindowsState={setWindowsState} handleOpenWindow={handleOpenWindow} />
        {windowsState.github && <GitHub windowName="github" setWindowsState={setWindowsState} windowsState={windowsState} zIndex={zIndices.github} bringToFront={() => bringToFront('github')} />}
        {windowsState.note && <Note windowName="note" setWindowsState={setWindowsState} windowsState={windowsState} zIndex={zIndices.note} bringToFront={() => bringToFront('note')} />}
        {windowsState.resume && <Resume windowName="resume" setWindowsState={setWindowsState} windowsState={windowsState} zIndex={zIndices.resume} bringToFront={() => bringToFront('resume')} />}
        {windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState} windowsState={windowsState} zIndex={zIndices.spotify} bringToFront={() => bringToFront('spotify')} />}
        {windowsState.cli && <Cli windowName="cli" setWindowsState={setWindowsState} windowsState={windowsState} zIndex={zIndices.cli} bringToFront={() => bringToFront('cli')} />}
        {windowsState.mail && <Mail windowName="mail" setWindowsState={setWindowsState} windowsState={windowsState} zIndex={zIndices.mail} bringToFront={() => bringToFront('mail')} />}

      </main>
    </>
  )
}

export default App
