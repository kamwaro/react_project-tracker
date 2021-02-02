import Project from './Project'


import React from 'react'

const Projects = ({projects,onRemove,onUpdate}) => {
    return (
        <>
           {projects.map((project,i) => (<Project key={i} project={project} onRemove={onRemove} onUpdate={onUpdate}/>))} 
        </>
    )
}

export default Projects
