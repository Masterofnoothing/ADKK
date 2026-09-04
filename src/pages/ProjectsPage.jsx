import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function ProjectsPage({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Robotics', 'Embedded Systems', 'Aerospace', '3D Design', 'Software'];

  const filteredProjects = projects.filter(p => {
    const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch = p.title.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.skills.some(s => s.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  return (
    <div className="w-full min-h-screen bg-bg-100 pt-28 pb-20 px-6 md:px-12 max-w-7xl mx-auto">

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-bg-200 mb-10">
        <div className="space-y-2">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-primary-600">Portfolio</span>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-text-900 tracking-tight">
            Project Archive
          </h1>
          <p className="text-sm text-text-500 max-w-xl">
            A log of my engineering builds, embedded code, and 3D design work. Click any project to read its detailed development blog.
          </p>
        </div>

      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          <SlidersHorizontal className="w-3.5 h-3.5 text-text-400 shrink-0 mr-1 hidden sm:block" />
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-primary-600 text-white'
                  : 'bg-bg-50 text-text-500 border border-bg-300 hover:border-primary-300 hover:text-primary-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-400" />
          <input
            type="text"
            placeholder="Search by title, skill..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-4 py-2 rounded-xl bg-bg-50 border border-bg-300 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 text-xs text-text-800 placeholder-text-400 outline-none transition-all duration-200"
          />
        </div>
      </div>

      {/* Project Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-bg-200 hover:border-primary-200 overflow-hidden bg-bg-50 card-shadow hover:card-shadow-hover transition-all duration-300 flex flex-col"
            >
              {/* Thumbnail */}
              <div className="w-full h-40 relative overflow-hidden blueprint-grid flex items-center justify-center border-b border-bg-200">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="flex flex-col items-center text-center opacity-80 pointer-events-none px-4">
                    <span className="font-mono text-[8px] text-primary-400 mb-1 uppercase tracking-widest">
                      Blueprint · {idx + 1}
                    </span>
                    <span className="text-lg font-display font-extrabold text-text-700 tracking-wide">
                      {project.title.split(' ').map(n => n[0]).join('')}
                    </span>
                    <span className="mt-1 text-[9px] font-mono text-primary-600 bg-primary-50 border border-primary-200 px-2 py-0.5 rounded">
                      {project.category}
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col flex-grow space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono text-text-400 uppercase tracking-widest bg-bg-100 border border-bg-200 px-2 py-0.5 rounded">
                    {project.category}
                  </span>
                  <span className="text-[10px] text-text-400 font-medium">{project.date}</span>
                </div>

                <h3 className="text-sm font-bold text-text-800 group-hover:text-primary-700 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-xs text-text-500 leading-relaxed flex-grow">{project.tagline}</p>

                <div className="flex flex-wrap gap-1.5">
                  {project.skills.map((skill, j) => (
                    <span key={j} className="text-[9px] font-mono text-text-500 bg-bg-100 border border-bg-200 px-2 py-0.5 rounded">
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={`#/project/${project.id}`}
                  className="block w-full py-2 text-center text-xs font-semibold text-primary-600 border border-primary-200 rounded-xl hover:bg-primary-50 transition-all duration-200 mt-1"
                >
                  Read Blog
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center rounded-2xl bg-bg-50 border border-bg-200 space-y-3">
          <p className="text-sm text-text-400">No projects match the current filter.</p>
          <button onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }} className="text-xs font-semibold text-primary-600 underline">
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
