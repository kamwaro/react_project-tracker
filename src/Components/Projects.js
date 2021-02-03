import Project from './Project'


import React from 'react'

const Projects = ({projects,onRemove,onUpdate,updLoveCounts,updHateCounts}) => {
    return (
        <>
           {projects.map((project,i) => (<Project key={i} project={project} onRemove={onRemove} onUpdate={onUpdate} updLoveCounts={updLoveCounts} updHateCounts={updHateCounts}/>))} 
        </>
    )
}

export default Projects
