import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Wrench } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectGallery from '../components/projects/ProjectGallery';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link to="/projects" className="text-[#687451] hover:text-[#55603b]">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Link
        to="/projects"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Projects
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-base text-gray-600 mb-8">{project.fullDescription}</p>

            <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
            {project.gallery && (
              <ProjectGallery images={project.gallery} title={project.title} />
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-6">Project Details</h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  {/* <User className="h-5 w-5 text-[#687451] mr-3" /> */}
                  <div>
                    <p className="text-sm text-gray-600">Client</p>
                    {project.clientUrl && project.client ? (
                      <a
                        href={project.clientUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#687451] hover:text-[#55603b]"
                      >
                        {project.client}
                      </a>
                    ) : (
                      <p className="font-medium">{project.client ?? '—'}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center">
                 {/* <Calendar className="h-5 w-5 text-[#687451] mr-3" /> */}
                  <div>
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="font-medium">{project.date}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  {/* <Wrench className="h-5 w-5 text-[#687451] mr-3" /> */}
                  <div>
                    <p className="text-sm text-gray-600">Tools</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tools?.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#f0f4e8] text-[#687451] rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {project.collaborators && (
  <div className="flex items-center">
    {/* <User className="h-5 w-5 text-[#687451] mr-3" /> */}
    <div>
      <p className="text-sm text-gray-600">Collaborators</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {project.collaborators.map((collaborator, index) => (
          <a
            key={index}
            href={collaborator.website}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-[#f0f4e8] text-[#687451] rounded-full text-sm hover:bg-[#e0e4d8] transition-colors"
          >
            {collaborator.name}
          </a>
        ))}
      </div>
    </div>
  </div>
)}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetailPage;