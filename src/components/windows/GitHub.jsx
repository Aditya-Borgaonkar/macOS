import React from 'react'
import githubData from '../../assets/github.json'
import MacWindow from './MacWindow'
import './github.scss'

const Gitcard = ({ data = { id: 1, image: "", title: "", description: "", tags: [], repoLink: "", demoLink: "" } }) => {
    return <div className="card">
        <img src={data.image} />
        <h3>{data.title}</h3>
        <p className='description'>{data.description}</p>
        <div className="tags">
            {data.tags.map(tag => <p key={tag} className='tag'>{tag}</p>)}
        </div>
        <div className="links">
            <a href={data.repoLink}>Repo</a>
            {data.demoLink && <a href={data.demoLink}>Demo</a>}
        </div>
    </div>
}

const GitHub = () => {
    return (
        <MacWindow windowName="GitHub Projects">
            <div className="cards">
                {githubData.map(project => {
                    return <Gitcard key={project.id} data={project} />
                })}
            </div>
        </MacWindow>
    )
}

export default GitHub