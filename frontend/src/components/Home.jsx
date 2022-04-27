import React from "react";
import { useState, useEffect } from "react";
import CustomCard from "../Card";
import DomainFilter from "./Filter/DomainFilter";
import Filter from "./Filter/filter";
import "./Home.css";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [query,setQuery] = useState('all')
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        `http://localhost:8000/project/${query}`
      );
      const resJson = await response.json();
      await setProjects(resJson);
      // console.log(resJson);
    };
    fetchApi();
  }, [query]);
 
  return (
    <div>
    <div  className="flex justify-center mt-4 p-10 ml-4">
    <div className="mr-8"> 
    <Filter  getquery={(q) => setQuery(`dept/${q}`) }  />
    </div>
    <div className="mr-8"> 
    <DomainFilter getquery={(q) => setQuery(`domain/${q}`) } />
    </div>
    
    </div>
    <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 my-10 lg:ml-5 sm:mt-8" >
            {projects.map((project) => {
              return (
                <CustomCard
                    
                  key={project.ProjectId}
                  ProjectName={project.ProjectName}
                  ProjectDomain={project.ProjectDomain}
                  ProjecTechStacks={project.ProjecTechStacks}
                  ProjectDescription={project.ProjectDescription}
                  ProjectDepartment={project.ProjectDepartment}
                  ProjectTeam={project.ProjectTeam}
                  ProjectMentor={project.ProjectMentor}
                  ProjectCode={project.ProjectCode}
                  image={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMevHeRa4l5PKEAMwb8hYXZOJWQbEJKN01yA&usqp=CAU"
                  }
                />
                              );
            })}
            </div>
            </div>
  );
};

export default Home;

