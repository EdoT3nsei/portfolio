import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap } from 'lucide-react';
import profilePicture from '../assets/images/profile_picture.jpeg';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-12">
          

          <img
            src={profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
          />
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-gray-600">
            Passionate graphic designer with expertise in digital and print media
          </p>
        </div>

        <div className="prose prose-lg mx-auto">
          <p className="mb-6">
            My name is Emile. I am 22 years old media engenieer from Switzerland.
            I'm passionate about creating digital experiences that are both beautiful and functional.
            
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="text-center">
              <Briefcase className="w-8 h-8 mx-auto mb-4 text-red-700" />
              <h3 className="font-semibold mb-2">Experiences</h3>
                <p className="text-gray-600">Content creator and community manager at <a href="https://www.nd-creation-visuelle.ch/" className="text-red-700" target="_blank">ND Création Visuelle</a></p>
                <p className="text-gray-600 pt-2">Artist assistant at <a href="https://mouvement.studio/" className="text-red-700" target="_blank">Mouvement Studio</a></p>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 mx-auto mb-4 text-red-700" />
              <h3 className="font-semibold mb-2">Projects</h3>
              <p className="text-gray-600">10+ Completed</p>
            </div>
            <div className="text-center">
              <GraduationCap className="w-8 h-8 mx-auto mb-4 text-red-700" />
              <h3 className="font-semibold mb-2">Education</h3>
              <p className="text-gray-600">Bachelor in media engenieering</p>
              <p className="text-gray-600 pt-2">CFC in mediamatic with professional maturity</p>
            </div>
          </div>

            {/* <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
            <ul className="list-disc pl-6 mb-6">
            <li>Brand Identity Design</li>
            <li>UI/UX Design</li>
            <li>Digital Illustration</li>
            <li>Motion Graphics</li>
            <li>Print Design</li>
            </ul> */}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;