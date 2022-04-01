import React from "react";
import { useState, useEffect } from "react";
import CustomCard from "../Card";
import "./Home.css";

const Home = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        `http://localhost:8000/project`
      );
      const resJson = await response.json();
      await setProjects(resJson);
      // console.log(resJson);
    };
    fetchApi();
  }, []);
  return (
    <section className="project">
            {projects.map((project) => {
              console.log(project); 
              return (
                <CustomCard

                  
                  ProjectName={project.ProjectName}
                  ProjectDomain={project.ProjectDomain}
                  ProjectTechstacks={project.ProjecTechStacks}
                  ProjectDescription={project.ProjectDescription}
                  ProjectDepartment={project.ProjectDepartment}
                  image={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMevHeRa4l5PKEAMwb8hYXZOJWQbEJKN01yA&usqp=CAU"
                  }
                />
              );
            })}
    </section>
  );
};

export default Home;

