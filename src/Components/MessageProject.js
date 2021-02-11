import React, { useState, useEffect } from "react";
import { Link, useParams} from "react-router-dom";

const MessageProject = ({ updMessages, updMessageCounts,projects}) => {
    
    let { id } = useParams();
    id = Number(id);
    console.log(id);
    const [isLoading, setIsLoading] = useState(true);
    const [Project, setProject] = useState({});
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([]);

    
    useEffect(() => {
        console.log(projects);
       let projectToUpdate =  projects.filter(project => project.id === id);
       console.log("updates",projectToUpdate)
       if(projectToUpdate.length){
        projectToUpdate = projectToUpdate[0];
        setProject(projectToUpdate);
        console.log(projectToUpdate);
        console.log(projectToUpdate.messages)
        setMessages([...messages,projectToUpdate.messages])
        console.log(messages);
        setIsLoading(false);
       }
    

        return () => {
            console.log('Component will unmount!!');
        }
    },[id,projects]);

  
    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(id)
        // console.log(projects);
        // let project = projects.filter(project => project.id === id);
        // console.log(project)
        // project = project[0];
        // console.log(project);
        // setProject(project)       
        //  console.log(Project);

        setMessages([...messages,message]);
        // console.log(message);
        // console.log(messages);
        updMessages(id,message);
        updMessageCounts(id);
        setMessage("");
    }
  
   


    return (
      <>
        {!isLoading && (
          <>
            <h1>{Project.name}</h1>
            <p>{Project.deadline}</p>
            <form className="form" >
                <div className="formControl">
                <textarea className="messageBox"  placeholder='Add some notes on progress and challenges of the project' value={message} onChange={(e) => setMessage(e.target.value) }>
                </textarea>
                </div>
                <div className="addMessageBtn">
                 <button className="messageBoxBtn" type='submit' onClick={onSubmit}>Add</button>
                </div>
                
                
            </form>

            <div>
                {message}
                {messages ?  messages.map((message,i) => (
                    <ul className="message" key={i}>
                        <li className="messageHead">Note {i + 1}</li>
                        <li>{message}</li>
                    </ul>
                )) : 'No notes taken.'}
            </div>
            <Link className="link" to="/">Back to homepage</Link>
          </>
        )}
      </>
    );
  };
  
export default MessageProject;