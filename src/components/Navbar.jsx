import React from 'react';
import { Cpu, Linkedin, Mail, Briefcase, Home } from 'lucide-react';

export default function Navbar({ currentHash }) {
  const isHome = currentHash === '' || currentHash === '/' || currentHash === '#/';
  const isProjects = currentHash.startsWith('#/projects') || currentHash.startsWith('#/project/');

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50 glass rounded-2xl py-3 px-6 flex items-center justify-between card-shadow">
      {/* Logo */}
      <a href="#/" className="flex items-center gap-2.5 group">
        <div className="p-1.5 rounded-lg bg-primary-50 border border-primary-100 group-hover:bg-primary-100 transition-colors duration-200">
          <Cpu className="w-4 h-4 text-primary-600" />
        </div>
        <span className="font-display font-bold tracking-wide text-text-800 text-sm md:text-base">
          Adinath Bhise
        </span>
      </a>

      {/* Nav Links */}
      <div className="flex items-center gap-1 md:gap-3">
        <a
          href="#/"
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 ${
            isHome
              ? 'bg-primary-50 text-primary-700 border border-primary-200'
              : 'text-text-500 hover:text-text-800 hover:bg-bg-200'
          }`}
        >
          <Home className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Home</span>
        </a>

        <a
          href="#/projects"
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 ${
            isProjects
              ? 'bg-primary-50 text-primary-700 border border-primary-200'
              : 'text-text-500 hover:text-text-800 hover:bg-bg-200'
          }`}
        >
          <Briefcase className="w-3.5 h-3.5" />
          <span>Projects</span>
        </a>

        <div className="h-4 w-px bg-bg-300 mx-1" />

        <a
          href="https://linkedin.com/in/adinath-bhise-048210395"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-lg text-text-400 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200"
          title="LinkedIn Profile"
        >
          <Linkedin className="w-4 h-4" />
        </a>

        <a
          href="mailto:adinathbhise45@gmail.com"
          className="p-1.5 rounded-lg text-text-400 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200"
          title="Email Me"
        >
          <Mail className="w-4 h-4" />
        </a>

      </div>
    </nav>
  );
}
