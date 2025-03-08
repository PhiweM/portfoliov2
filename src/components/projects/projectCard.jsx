import React from 'react';
import { LuGithub } from "react-icons/lu";
import { HiOutlineExternalLink } from "react-icons/hi";

//ProjectCard 1: IMAGE RIGHT
export default function ProjectCard(props) {
  return (
    <div className="project-card  md:min-w-[600px] md:max-w-[800px] xl:max-w-[1000px] h-80 xl:h-96 flex rounded mx-auto bg-gray-800 mb-12 z-0 md:ml-10  transition-all duration-300  shadow-gray-900 hover:shadow-gray-900 hover:translate-y-[-5px]" >
      
     {/* Project Details */}
      <div className="card-header w-3/4 md:w-1/2 mh-full pt-4 pb-2 px-5 md:pt-6 pb-none flex flex-col">
        <h2 className="project-title text-gray-400 text-xl ubuntu-bold mb-2">{props.title}</h2>
        <p className="desc text-gray-400  font-normal flex-grow mb-6">{props.desc.length > 300 ? `${props.desc.slice(0,300)}...` : props.desc}</p>

        <div className="tech-stack-wrap flex items-center mt-auto justify-between">
          <div className="techStack flex flex-wrap ">
            {props.techStack.map((tech, index) => {
              return (
                <p key={index} className='text-xs font-thin tracking-wider text-gray-400 mr-2'>{tech}</p>
              ) 
            })}
          </div>

          <div className="external-links flex gap-2 ">
            <a href={props.gitHubLink} target="_blank" className=' text-gray-400 text-xl hover:text-cyan-300'><LuGithub /></a>
            <a href={props.projectLink} target="_blank" className=' text-gray-400 text-xl hover:text-cyan-300'><HiOutlineExternalLink /></a>
          </div>

        </div>
      </div>

      {/* Project Image */}
      <div 
        className="card-body relative w-1/4 md:w-1/2 mx-auto py-4 md:py-8 pl-12 flex justify-center cursor-pointer " 
        onClick={() => window.open(props.projectLink, '_blank')}
      > 
        <img 
          src={props.Image} 
          alt="Project image" 
          loading="lazy"
          className="project-image rounded-2xl shadow-lg  w-full h-auto rounded-tr-none rounded-br-none object-cover bg-cover bg-center" />
        
        <div className="absolute inset-0 bg-cyan-900  bg-opacity-50 hover:bg-opacity-5 flex items-end justify-end gap-1 pb-2 pr-5 rounded-tr rounded-br"></div>
      </div>
    </div>
  );
}



