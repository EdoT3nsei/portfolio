import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: project.id * 0.1 }}
        className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full"
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-burgundy-950/0 group-hover:bg-burgundy-950/10 transition-colors duration-300" />
        </div>
        <div className="p-6">
          <span className="text-sm font-medium text-burgundy-600">
            {project.category}
          </span>
          <h2 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-burgundy-600 transition-colors">
            {project.title}
          </h2>
          <p className="mt-2 text-gray-500">
            {project.description}
          </p>
          <div className="mt-4 inline-flex items-center text-sm font-medium text-burgundy-600 group-hover:text-burgundy-500">
            View Project
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;