import React from 'react'
import { useEffect, useState } from 'react'

const Card = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        `http://localhost:8000/project`
      );
      const resJson = await response.json();
      setProjects(resJson);
      console.log(resJson);
    };
    fetchApi();
  }, []);


  return (
    <div>
      {projects.map(project => {
        return (
          <div>
            <h1>{project.ProjectName}</h1>
            <p>{project.ProjectDepartment}</p>
            <p>{project.ProjectDescription}</p>
            <p>{project.ProjecTechStacks}</p>
            <p>{project.ProjectDuration}</p>
            <p>{project.ProjectCode}</p>
            <p>{project.ProjectTeam}</p>
          </div>
        );
      })}
    </div>
  )
}

export default Card