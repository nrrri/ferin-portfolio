import React from 'react';
import { projects, Project } from './Projects'; // Assuming Projects.tsx contains your project data structure
import Card from './Card'; // Import the ProjectCard component

const ProjectCards: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {projects.map((project: Project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectCards;
