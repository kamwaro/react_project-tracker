import React from 'react'
import {useState} from 'react'
import Header from './Components/Header'
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'

const App = () => {

const [projects, setProjects] = useState([
  {
    id:1,
    name:'Build 10 micro react apps in 2 days',
    deadline:'By Feb 7th 2020',
    done:true
  },
  {
    id:2,
    name:'Sign up for Ecommerce class',
    deadline:'By Feb 7th 2020',
    done:false
  },
  {
    id:3,
    name:'Build a portfolio',
    deadline:'By Feb 28th 2020',
    done:false
  },
  {
    id:4,
    name:'Get a job',
    deadline:'By March 30th 2020',
    done:false
  }
])

let [showForm,setShowForm] = useState(true);

// Add project
const addProject = (project,deadline) => {
  const id = Math.floor(Math.random() * 1000) + 1;
  const newProject = {id:id,name:project,deadline:deadline,done:false};
  setProjects([...projects,newProject]);
}

// Update form status

const toggleForm = () => {
  setShowForm(showForm  = !showForm);
}

// Remove project
const removeProject = (id) => {
  setProjects(projects.filter(project => project.id !== id ));
  
  }

 // Update project status
 
 const updStatus = (id) => {
  setProjects(projects.map(project => project.id === id ? {...project,done:!project.done} : project))
 }

  return (
    <div className="container">
      <Header toggleForm={toggleForm}/>
      <AddProject showForm={showForm} addProject={addProject}/>
      <Projects projects={projects} onRemove={removeProject} onUpdate={updStatus}/>
    </div>
  )
}

export default App
