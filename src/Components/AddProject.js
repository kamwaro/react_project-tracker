import React from 'react'
import {useState} from 'react'

const AddProject = ({showForm,addProject}) => {

    let [newProject,setNewProject] = useState('');
    let [deadline,setDeadline] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({newProject:newProject,deadline:deadline});

        addProject(newProject,deadline);
        setNewProject("");
        setDeadline("");
    }
        
    

    return (
        <form className={showForm ? 'form formOpen' : 'form formClose'}> 
            <div className='form_control'>
                <input type='text' placeholder='Add Project' value={newProject} onChange={e => setNewProject(e.target.value)}/>
            </div>
            <div className='form_control'>
                <input type='text' placeholder='Add Deadline' value={deadline}  onChange={e => setDeadline(e.target.value)}/>
            </div>
            <button className='submitBtn' type='submit' onClick={onSubmit}>Add</button>
            
        </form>
    )
}

export default AddProject
