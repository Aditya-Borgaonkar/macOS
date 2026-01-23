import React, { useState } from 'react'
import { Rnd } from 'react-rnd'
import "./MacWindow.scss"

const MacWindow = ({ children, windowName, setWindowsState, windowsState, defaultWidth = "40vw", defaultHeight = "40vh" }) => {
    const [isDraggingOrResizing, setIsDraggingOrResizing] = useState(false)

    return (
        <Rnd
            default={{ width: defaultWidth, height: defaultHeight, x: 300, y: 50 }}
            minWidth={300}
            minHeight={200}
            bounds="parent"
            dragHandleClassName="nav"
            enableResizing={{
                top: true,
                right: true,
                bottom: true,
                left: true,
                topRight: true,
                bottomRight: true,
                bottomLeft: true,
                topLeft: true
            }}
            onDragStart={() => setIsDraggingOrResizing(true)}
            onDragStop={() => setIsDraggingOrResizing(false)}
            onResizeStart={() => setIsDraggingOrResizing(true)}
            onResizeStop={() => setIsDraggingOrResizing(false)}
        >
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div onClick={() => setWindowsState({ ...state, [windowName]: false })} className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    <div className="title">
                        <p>{windowName || "adityaborgaonkar - zsh"}</p>
                    </div>
                </div>
                <div className={`main-content ${isDraggingOrResizing ? 'no-pointer' : ''}`}>
                    {children}
                </div>
            </div>
        </Rnd >
    )
}

export default MacWindow