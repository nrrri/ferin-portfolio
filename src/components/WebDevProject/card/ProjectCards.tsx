import React from 'react';
// import { projects, Project } from './Projects'; // Assuming Projects.tsx contains your project data structure
import Card from './Card'; // Import the ProjectCard component
import { Project, projects } from './Projects';

const ProjectCards: React.FC = () => {
  return (
    <div className=" grid md:grid-cols-2 xl:grid-cols-3 justify-center gap-4 mb-16">
      {projects.map((project: Project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectCards;
