import React from 'react';
import { Project } from './Projects'; // Assuming Projects.tsx contains your project data structure

interface ProjectCardProps {
    project: Project;
}

const Card: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="min-w-[350px] max-w-[350px] max-h-[500px] bg-bgday200 overflow-hidden shadow-lg">
            <div className='flex justify-center'>
                <img className="object-cover h-[250px]" src={project.picture} alt={project.title} />
            </div>
            <div className="px-6 py-4">
                <div className='flex justify-between items-center pb-2'>
                    <div className="text-xl uppercase text-primary200 transform transition duration-500 hover:text-secondary200">{project.title}</div>
                    <div className="flex justify-between">
                        {project.icons.map((icon, index) => (
                            <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer" className="mr-2">
                                <img className='w-6 h-6' src={icon.logo} alt="" />
                            </a>
                        ))}
                    </div>
                </div>
                <p className="text-grey300 text-base">{project.description}</p>
            </div>

        </div>
    );
};

export default Card;
