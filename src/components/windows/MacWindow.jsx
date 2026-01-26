import React, { useState } from 'react'
import { Rnd } from 'react-rnd'
import "./MacWindow.scss"

const MacWindow = ({ children, windowName, setWindowsState, windowsState, defaultWidth = "40vw", defaultHeight = "40vh", zIndex, bringToFront }) => {
    const [isDraggingOrResizing, setIsDraggingOrResizing] = useState(false)
    const [isClosing, setIsClosing] = useState(false)

    const handleClose = () => {
        setIsClosing(true)
        setTimeout(() => {
            setWindowsState({ ...windowsState, [windowName]: false })
        }, 200) // Match the duration of windowClose animation in SCSS
    }

    return (
        <Rnd
            style={{ zIndex: zIndex }}
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
            <div onMouseDown={bringToFront} className={`window window-open ${isClosing ? 'window-closing' : ''}`}>
                <div className="nav">
                    <div className="dots">
                        <div onClick={handleClose} className="dot red"></div>
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