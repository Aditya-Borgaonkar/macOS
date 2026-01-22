import React from 'react'
import MacWindow from './MacWindow'
import "./spotify.scss"

const Spotify = ({ windowName, setWindowsState }) => {
    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState} defaultWidth="400px" defaultHeight="480px">
            <div className="spotify-window">
                <iframe
                    src="https://open.spotify.com/embed/playlist/37i9dQZF1DX14CbVHtvHRB?utm_source=generator&theme=0"
                    style={{ borderRadius: "12px", border: "none" }}
                    width="100%"
                    height="100%"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title="Spotify"
                ></iframe>
            </div>
        </MacWindow>
    )
}

export default Spotify