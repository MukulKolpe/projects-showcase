import React from "react";
import {useState,useEffect} from "react";

const AddProject = () => {

  const [ProjectName,setProjectName] = useState("");
  const [ProjectDepartment,setProjectDepartment] = useState("");
  const [ProjectDivision,setProjectDivision] = useState("");
  const [ProjectDomain,setProjectDomain] = useState("");
  const [ProjectDescription,setProjectDescription] = useState("");
  const [ProjecTechStacks,setProjectTechStacks] = useState("");
  const [ProjectDuration,setProjectDuration] = useState("");
  const [ProjectMentor,setProjectMentor] = useState("");
  const [ProjectCode,setProjectCode] = useState("");
  const [ProjectTeam,setProjectTeam] = useState("");


  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:8000/project/add", {
        method: "POST",
        body: JSON.stringify({
          ProjectName : ProjectName,
          ProjectDepartment : ProjectDepartment,
          ProjectDivision : ProjectDivision,
          ProjectDomain : ProjectDomain,
          ProjectDescription : ProjectDescription,
          ProjecTechStacks : ProjecTechStacks,
          ProjectDuration : ProjectDuration,
          ProjectMentor : ProjectMentor,
          ProjectCode : ProjectCode,
          ProjectTeam : ProjectTeam,
        }),
      });
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 200) {
        alert("Project Added Successfully");
        // setMessage("User created successfully");
      } else {
        // setMessage("Some error occured");
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col justify-center w-screen md:px-48">
      <div className="flex justify-center items-center flex-col bg-gray-100 px-8">
        <h1 className="text-3xl font-bold text-gray-700">Add Project</h1>
        <form className="flex flex-col w-1/2 my-4">
          <div className="flex flex-col">
            <label className="text-gray-700 mt-4 mb-0">Project Name</label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="Project Name"
              value={ProjectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 mt-4">Project Description</label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="Project Description"
              value={ProjectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}

            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 mt-4">Project Department</label>
            <div class="inline-block relative w-128">
              <select 
              onChange={(e) => setProjectDepartment(e.target.value)}
                class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option value="">Select Department</option>
                <option value="CMPN">CMPN</option>
                <option value="INFT">INFT</option>
                <option value="AIDS">AI-DS</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 mt-4">Division:</label>
            <div class="inline-block relative w-128">
              <select onChange={(e) => setProjectDivision(e.target.value)} class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option value="">Select Division</option>
                <option value="D10A">D10A</option>
                <option value="D10B">D10B</option>
                <option value="D7A">D7A</option>
                <option value="D7B">D7B</option>
                <option value="D7C">D7C</option>
                <option value="D6AD">D6AD</option>

              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 mt-4">Project Domain</label>
            <div class="inline-block relative w-128">
              <select onChange={(e) => setProjectDomain(e.target.value)} class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option value="">Select Domain</option>
                <option value="WebDev">Web Development</option>
                <option value="AppDev">App Development</option>
                <option value="ML">Machine Learning</option>
                <option value="AI">Artificial Intelligence</option>
                <option value="IOT">Internet of Things</option>
                <option value="BlockChain">Blockchain</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 mt-4">Project Mentor</label>
            <div class="inline-block relative w-128">
              <select onChange={(e) => setProjectMentor(e.target.value)} class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option value="">Select Mentor</option>
                <option value="VM">Vinita Mishra</option>
                <option value="RS">Rohini Sawant</option>
                <option value="SM">Smita Mane</option>
                <option value="JM">Jitendra Madavi</option>
                <option value="KJ">Kajal Jewani</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 mt-4">Project TechStacks</label>
            <div class="inline-block relative w-128">
              <select onChange={(e) => setProjectTechStacks(e.target.value)} class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option value="">Technology Used</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="JS">JavaScript</option>
                <option value="CPP">C++</option>
                <option value="C#">C#</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label  className="text-gray-700 mt-4">Project Duration:</label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="Project Duration"
              value={ProjectDuration}
              onChange={(e) => setProjectDuration(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label  className="text-gray-700 mt-4">Code Link:</label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="Github Link"
              value={ProjectCode}
              onChange={(e) => setProjectCode(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label  className="text-gray-700 mt-4">Project Team:</label>
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="Menmber1,Menmber2,Menmber3..."
              value={ProjectTeam}
              onChange={(e) => setProjectTeam(e.target.value)}
            />
          </div>
          <div>
            <button onClick={handleSubmit} class="bg-blue-400 my-2 p-2 rounded text-white">
            Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
