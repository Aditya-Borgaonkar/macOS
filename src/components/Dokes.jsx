import React from 'react'
import "./dock.scss"

const Dokes = ({ windowsState, setWindowsState }) => {
    return (
        <footer className='dock'>
            <div
                onClick={() => { setWindowsState({ ...windowsState, github: true }) }}

                className="icon github"><img src="/dokes-icons/github.svg" alt="" /></div>
            <div
                onClick={() => { setWindowsState({ ...windowsState, note: true }) }}
                className="icon note"><img src="/dokes-icons/note.svg" alt="" /></div>
            <div onClick={() => { setWindowsState({ ...windowsState, resume: true }) }} className="icon pdf"><img src="/dokes-icons/pdf.svg" alt="" /></div>
            <div onClick={() => { setWindowsState({ ...windowsState, calender: true }) }} className="icon calender"><img src="/dokes-icons/calender.svg" alt="" /></div>
            <div onClick={() => { setWindowsState({ ...windowsState, spotify: true }) }} className="icon spotify"><img src="/dokes-icons/spotify.svg" alt="" /></div>
            <div onClick={() => { setWindowsState({ ...windowsState, mail: true }) }} className="icon mail"><img src="/dokes-icons/mail.svg" alt="" /></div>
            <div onClick={() => { setWindowsState({ ...windowsState, link: true }) }} className="icon link"><img src="/dokes-icons/link.svg" alt="" /></div>
            <div onClick={() => { setWindowsState({ ...windowsState, cli: true }) }} className="icon cli"><img src="/dokes-icons/cli.svg" alt="" /></div>
        </footer>
    )
}

export default Dokes