import React from 'react'
import {useState,useEffect} from 'react'
import Header from './Components/Header'
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'
import MessageProject from './Components/MessageProject'
import {Route} from 'react-router-dom';
import About from './Components/About'

const App = () => {

const [projects, setProjects] = useState([])

let [showForm,setShowForm] = useState(true);


useEffect(() => {
  const getProjects = async () => {
    const projects = await fetchProjects();
    console.log(projects);
    setProjects(projects);
  }
  getProjects();
},[])

// fetch projects
const fetchProjects = async () => {
  const res = await fetch('http://localhost:5001/projects');
  const data = await res.json();

  return data
}

// fetch project
const fetchProject = async (id) => {
const res = await fetch(`http://localhost:5001/projects/${id}`)
const data = await res.json()
return data;
}




// Add project
const addProject = async (project,deadline) => {
  const newProject = {name:project,deadline:deadline,done:false};

  const res = await fetch('http://localhost:5001/projects',{
    method:'POST',
    headers:{'Content-type':'application/json'},
    body:JSON.stringify(newProject)
  })

  const data = await res.json();

  setProjects([...projects,data]);


  // const id = Math.floor(Math.random() * 1000) + 1;
  // const newProject = {id:id,name:project,deadline:deadline,done:false};
  // setProjects([...projects,newProject]);
}

// Update form status

const toggleForm = () => {
  setShowForm(showForm  = !showForm);
}

// Update love Counts;

const updLoveCounts = async (id) => {
  const projectToUpdate = await fetchProject(id);
  const updData = {...projectToUpdate,loveCounts:projectToUpdate.loveCounts + 1};
  const res = await fetch(`http://localhost:5001/projects/${id}`,{
    method:'PUT',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(updData)
  })
  const data = await res.json();
  setProjects(projects.map(project => project.id === id ? {...project,loveCounts:data.loveCounts} : project))
}

// Update hate Counts;

const updHateCounts = async (id) => {
  const projectToUpdate = await fetchProject(id);
  const updData = {...projectToUpdate,hateCounts:projectToUpdate.hateCounts + 1};
  const res = await fetch(`http://localhost:5001/projects/${id}`,{
    method:'PUT',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(updData)
  })
  const data = await res.json();
  setProjects(projects.map(project => project.id === id ? {...project,hateCounts:data.hateCounts} : project))
}

// Remove project
const removeProject = async (id) => {
  await fetch(`http://localhost:5001/projects/${id}`,{
      method:'DELETE'
    })
  setProjects(projects.filter(project => project.id !== id ));
  }



 // Update project status 
 const updStatus = async (id) => {
   const projectToUpdate = await fetchProject(id);
   const updatedProject = {...projectToUpdate,done:!projectToUpdate.done};
   const res = await fetch(`http://localhost:5001/projects/${id}`,{
     method:'PUT',
     headers:{'Content-type':'application/json'},
     body:JSON.stringify(updatedProject)
   })
   const data = await res.json();

  setProjects(projects.map(project => project.id === id ? {...project,done:data.done} : project))
 }

  // Update project messages
  const updMessages = async (id,message) => {
     let projectToUpdate = await fetchProject(id);
    console.log(id);
    console.log(message);
    console.log(projectToUpdate)
    const updatedProject = {...projectToUpdate,messages:[...projectToUpdate.messages,message]};
    console.log("updated ",updatedProject)
    const res = await fetch(`http://localhost:5001/projects/${id}`,{
      method:'PUT',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify(updatedProject)
    })
    const data = await res.json();
    console.log("Data ",data);
    const {messages}= data 

    console.log(message);
    console.log(data);
 
   setProjects(projects.map(project => project.id === id ? {...project,messages: messages} : project))
  }

  const updMessageCounts = async (id) => {
    const projectToUpdate = await fetchProject(id);
    const updData = {...projectToUpdate,messageCounts:projectToUpdate.messageCounts + 1};
    const res = await fetch(`http://localhost:5001/projects/${id}`,{
      method:'PUT',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(updData)
    })
    const data = await res.json();
    setProjects(projects.map(project => project.id === id ? {...project,messageCounts:data.messageCounts} : project))
  }

  return (
    <div className="container">
      <Route path='/' exact>
          <Header toggleForm={toggleForm} showForm={showForm}/>
          <AddProject showForm={showForm} addProject={addProject}/>
          {projects.length > 0 ? <Projects projects={projects} onRemove={removeProject} onUpdate={updStatus} updLoveCounts={updLoveCounts} updHateCounts={updHateCounts}/> : <h3 style={{textAlign:'center'}}>No projects to display.Please add.</h3>}
      </Route>
      
      <Route path='/about' exact component={About}/> 
      <Route path='/projectTrack/:id' exact   >
      <MessageProject updMessages={updMessages} fetchProject={fetchProject} projects={projects} updMessageCounts={updMessageCounts} />
      </Route>
    </div>
  )
}

export default App
