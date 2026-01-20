import React from 'react'
import "./dock.scss"

const Dokes = () => {
    return (
        <footer className='dock'>
            <div className="icon github"><img src="/dokes-icons/github.svg" alt="" /></div>
            <div className="icon note"><img src="/dokes-icons/note.svg" alt="" /></div>
            <div className="icon pdf"><img src="/dokes-icons/pdf.svg" alt="" /></div>
            <div className="icon calender"><img src="/dokes-icons/calender.svg" alt="" /></div>
            <div className="icon spotify"><img src="/dokes-icons/spotify.svg" alt="" /></div>
            <div className="icon mail"><img src="/dokes-icons/mail.svg" alt="" /></div>
            <div className="icon link"><img src="/dokes-icons/link.svg" alt="" /></div>
            <div className="icon cli"><img src="/dokes-icons/cli.svg" alt="" /></div>
        </footer>
    )
}

export default Dokes