import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm">© 2024 Emile's Portfolio. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="https://github.com/EdoT3nsei" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/emile-donzel/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black">
              <Linkedin size={20} />
            </a>
            <a href="mailto:emiledonzel@bluewin.ch" className="text-gray-500 hover:text-black">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;