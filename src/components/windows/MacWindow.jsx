import React from 'react'
import { Rnd } from 'react-rnd'
import "./MacWindow.scss"

const MacWindow = ({ children, windowName, setWindowsState, defaultWidth = "40vw", defaultHeight = "40vh" }) => {
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
            resizeGrid={[1, 1]}
            dragGrid={[1, 1]}
            style={{
                transition: 'box-shadow 0.2s ease',
                willChange: 'transform'
            }}
        >
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    <div className="title">
                        <p>{windowName || "adityaborgaonkar - zsh"}</p>
                    </div>
                </div>
                <div className="main-content">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindow