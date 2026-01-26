import React from 'react'
import "./dock.scss"

const Dokes = ({ windowsState, setWindowsState, handleOpenWindow }) => {
    return (
        <footer className='dock'>
            <div
                onClick={() => handleOpenWindow('github')}
                className={`icon github ${windowsState.github ? 'active' : ''}`}><img src="/dokes-icons/github.svg" alt="" /></div>
            <div
                onClick={() => handleOpenWindow('note')}
                className={`icon note ${windowsState.note ? 'active' : ''}`}><img src="/dokes-icons/note.svg" alt="" /></div>

            <div onClick={() => handleOpenWindow('resume')} className={`icon pdf ${windowsState.resume ? 'active' : ''}`}><img src="/dokes-icons/pdf.svg" alt="" /></div>
            <div onClick={() => window.open("https://calendar.google.com/calendar/u/0/r?pli=1", "_blank")} className={`icon calender ${windowsState.calender ? 'active' : ''}`}><img src="/dokes-icons/calender.svg" alt="" /></div>
            <div onClick={() => handleOpenWindow('spotify')} className={`icon spotify ${windowsState.spotify ? 'active' : ''}`}><img src="/dokes-icons/spotify.svg" alt="" /></div>
            <div onClick={() => window.open("mailto:aditya.borgaonkar4@gmail.com", "_blank")} className={`icon mail ${windowsState.mail ? 'active' : ''}`}><img src="/dokes-icons/mail.svg" alt="" /></div>
            <div onClick={() => window.open("https://www.linkedin.com/in/aditya-borgaonkar-100357263/?skipRedirect=true", "_blank")} className="icon link"><img src="/dokes-icons/link.svg" alt="" /></div>
            <div onClick={() => handleOpenWindow('cli')} className={`icon cli ${windowsState.cli ? 'active' : ''}`}><img src="/dokes-icons/cli.svg" alt="" /></div>
        </footer>
    )
}

export default Dokes