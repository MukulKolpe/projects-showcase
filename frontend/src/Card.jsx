import React from "react"
import { Card,Button,Row,Container,Col , Modal} from "react-bootstrap"
import { useState } from "react";


const CustomCard = ({ProjectId,ProjectName,ProjectDepartment,ProjectDivision,ProjectDomain,ProjectDescription,ProjecTechStacks,ProjecDuration,ProjectMentor,ProjectCode,ProjectTeam,image}) => {
    const [showModal,setShowModal] = useState(false);
    console.log(ProjecTechStacks);
    return(
      <div>
      <div class="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
      <img class="h-56 lg:h-65 w-full object-cover" src={image} alt="" />
      <div class="p-3">
          <h1 class="font-bold leading-8 text-gray-700 my-5 text-3xl">
          {ProjectName}
          </h1>
         
          <p class="paragraph-normal text-gray-700">
          {ProjectDescription}
          </p>

          <p class="paragraph-normal text-gray-600">
          {ProjectDomain}
          </p>
      </div>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-4 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        View More
      </button>
     
  </div>

  
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none md:inset-0 h-modal md:h-full"
          >
            <div className="relative w-auto  mx-auto max-w-3xl pr-16 pl-16">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {ProjectName}
                  </h3>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mt-8 mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  
                </div>
                {/*body*/}
                <div className=" mb-5 pl-14 pr-14">
                 <img className="h-56 lg:h-120 h-80 p-5" src={image} alt="" />
                <div className="p-2">
               <h3 className="mt-2 text-2xl float-left font-semibold text-gray-700 ">Tech Stack : {ProjecTechStacks}</h3><br/>
               <h3 className="mt-2 text-2xl float-left font-semibold text-gray-700"> Department : {ProjectDepartment}</h3><br/>
               <h3 className="mt-2  text-2xl float-left font-semibold text-gray-700">Team: {ProjectTeam}</h3><br/>
               <h3 className="mt-2 text-2xl float-left font-semibold text-gray-700"> Mentor : {ProjectMentor}</h3>
          </div>
          </div>


                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  
                <a href={ProjectCode} className="float-left hover:no-underline mt-7 p-3 bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-4 ease-linear transition-all duration-150">
                    Link to code
                  </a>
                  
                 
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
  </div>

    )

}

export default CustomCard