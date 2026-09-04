import React, { lazy, Suspense, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import projects from './data/blogs';

const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handler = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const renderPage = () => {
    if (currentHash.startsWith('#/project/')) {
      return <ProjectDetailPage projectId={currentHash.replace('#/project/', '')} projects={projects} />;
    }
    if (currentHash === '#/projects' || currentHash === '#/projects/') {
       return <ProjectsPage projects={projects} />;
    }
    return <LandingPage projects={projects} />;
  };

  return (
    <div className="relative min-h-screen bg-bg-100 text-text-800 overflow-x-hidden selection:bg-primary-100 selection:text-primary-900">
      <Navbar currentHash={currentHash} />
      <main className="relative w-full">
        <Suspense fallback={<div className="min-h-screen bg-bg-100" />}>
          {renderPage()}
        </Suspense>
      </main>
    </div>
  );
}
