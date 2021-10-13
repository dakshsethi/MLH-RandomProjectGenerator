import { useState, useEffect } from "react";
import Project from "./Project";
import projectList from './projectList';

function App() {
  const [isLoaded, setIsLoaded] = useState(true)
  const [projects, setProjects] = useState([])
  const [randomId, setrandomId] = useState(0)

  useEffect(() => {
    setIsLoaded(false)
    setProjects(projectList)
    setrandomId(randomProject())
  }, [projects])

  function randomProject() {
    const total = projects.length;
    let id = Math.floor(Math.random() * total);
    return id;
  }

  return (
    <div className="app">
        { isLoaded && <h1>Generating new Project Idea!!</h1> }
        { !isLoaded && <Project key={() => randomProject()} data={ projects[randomId] } /> }
    </div>
  );
}

export default App;
