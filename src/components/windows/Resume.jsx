import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = ({ windowName, setWindowsState }) => {
    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} >
            <div className="resume-window">
                <embed src="/resume.pdf" style={{ border: "none" }}></embed>
            </div>
        </MacWindow>
    )
}

export default Resume