import React, { lazy, Suspense } from 'react';
import { ArrowRight, Code, Cpu, Wrench, BookOpen, Layers, Award, Trophy, ExternalLink, GraduationCap, Mail, Linkedin } from 'lucide-react';

const ThreeCanvas = lazy(() => import('../components/ThreeCanvas'));

export default function LandingPage({ projects }) {
  const highlightedProjects = projects.slice(0, 2);

  const skillsData = [
    {
      category: 'Programming',
      icon: <Code className="w-4 h-4 text-primary-600" />,
      items: ['C', 'C++', 'Python', 'Arduino IDE'],
    },
    {
      category: 'Embedded & Hardware',
      icon: <Cpu className="w-4 h-4 text-primary-600" />,
      items: ['ESP32', 'Lolin S2 Mini (ESP32-S2)', 'KK2.15 Flight Controller', 'PCA9685 Servo Driver', 'Sensor Integration (Ultrasonic, LIDAR)'],
    },
    {
      category: 'Tools & Platforms',
      icon: <Wrench className="w-4 h-4 text-primary-600" />,
      items: ['GitHub', 'Blender (3D Modeling)', 'Basic OpenCV', 'Basic PCB Design'],
    },
    {
      category: 'Coursework',
      icon: <BookOpen className="w-4 h-4 text-primary-600" />,
      items: ['Microprocessors & Microcontrollers', 'AI for Robotics', 'Robotics Kinematics & Dynamics', 'Data Science'],
    },
    {
      category: 'Aerospace & Other',
      icon: <Layers className="w-4 h-4 text-primary-600" />,
      items: ['RC Plane Wing Design', 'Straight & Tilt-Wing Configurations'],
    },
  ];

  return (
    <div className="w-full relative bg-bg-100">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex flex-col md:flex-row items-center justify-between pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto gap-10 overflow-hidden">
        {/* Left */}
        <div className="flex-1 space-y-7 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-200 text-xs font-semibold text-primary-700 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            Seeking Embedded Systems Internship
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-text-900 leading-tight">
              Hi, I'm<br />
              <span className="text-primary-600">Adinath Bhise</span>
            </h1>
            <p className="text-base sm:text-lg font-display font-medium text-text-500">
              Robotics & Automation Engineering Student
            </p>
          </div>

          <p className="text-sm sm:text-base text-text-500 leading-relaxed max-w-md">
            Passionate about embedded programming, hardware interfacing, and robotics prototyping. Hands-on experience building quadruped robots, drone systems, and autonomous bots.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <a href="#/projects" className="px-5 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-sm flex items-center gap-2 transition-all duration-200 active:scale-95">
              Explore Projects <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a href="mailto:adinathbhise45@gmail.com" className="px-5 py-2.5 rounded-xl bg-bg-50 border border-bg-300 hover:border-bg-400 text-text-700 font-semibold text-sm transition-all duration-200 active:scale-95">
              Get In Touch
            </a>
          </div>

           {/* Quick contact row */}
           <div className="flex flex-wrap gap-4 pt-1 text-xs text-text-400">
             <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> adinathbhise45@gmail.com</span>
             <a href="https://linkedin.com/in/adinath-bhise-048210395" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary-600 transition-colors duration-200">
               <Linkedin className="w-3.5 h-3.5" /> LinkedIn
             </a>
           </div>
        </div>

        {/* Right — Three.js canvas on a clean card */}
        <div className="flex-1 w-full h-[400px] md:h-[520px] relative z-10 rounded-3xl overflow-hidden card-shadow border border-bg-200 bg-bg-50">
           <Suspense fallback={<div className="w-full h-full min-h-[420px] md:min-h-[520px] blueprint-grid" />}>
             <ThreeCanvas />
           </Suspense>
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────────────────────────── */}
      <div className="border-t border-bg-200" />

      {/* ── Summary & Education ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-4">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-primary-600">About</span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-text-900">Professional Summary</h2>
          <div className="w-8 h-0.5 bg-primary-500" />
          <p className="text-sm text-text-500 leading-relaxed">
            I specialize in embedded systems design, microcontroller programming (ESP32, Arduino), and sensor interfacing. From mechanical assembly modifications in Blender to control loop PID tuning for drones, I thrive at the intersection of hardware, software, and dynamic kinematics.
          </p>
          <p className="text-sm text-text-500 leading-relaxed">
            My work ranges from hands-on prototype fabrication to 3D modeling high-fidelity robot renders for technical documentation and freelance deliverables.
          </p>
        </div>

        <div className="space-y-4">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-primary-600">Education</span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-text-900">Academic Background</h2>
          <div className="w-8 h-0.5 bg-primary-500" />

          <div className="mt-2 p-5 rounded-2xl bg-bg-50 border border-bg-200 card-shadow flex items-start gap-4 hover:border-primary-200 transition-all duration-200">
            <div className="p-2.5 rounded-xl bg-primary-50 border border-primary-100 shrink-0">
              <GraduationCap className="w-5 h-5 text-primary-600" />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-semibold text-primary-600 uppercase tracking-wider">2024 – 2028 · Third Year</span>
              <h3 className="text-base font-bold text-text-800">B.E. Robotics & Automation Engineering</h3>
              <p className="text-sm text-text-500">AISSMS College of Engineering, Pune</p>
              <p className="text-xs text-text-400">Savitribai Phule Pune University (SPPU)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-bg-50 border-t border-b border-bg-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12 space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-primary-600">Skills</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-text-900">Technical Arsenal</h2>
            <div className="w-8 h-0.5 bg-primary-500 mt-1" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillsData.map((group, i) => (
              <div key={i} className="p-5 rounded-2xl bg-bg-100 border border-bg-200 hover:border-primary-200 hover:bg-bg-50 card-shadow transition-all duration-200 group">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-2 rounded-lg bg-primary-50 border border-primary-100 group-hover:bg-primary-100 transition-colors duration-200">
                    {group.icon}
                  </div>
                  <h3 className="font-display font-bold text-sm text-text-800">{group.category}</h3>
                </div>
                <ul className="space-y-1.5">
                  {group.items.map((skill, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-text-500">
                      <span className="w-1 h-1 rounded-full bg-primary-400 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ─────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-start sm:items-center justify-between gap-4 mb-12">
          <div className="space-y-2">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-primary-600">Work</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-text-900">Featured Builds</h2>
            <div className="w-8 h-0.5 bg-primary-500" />
          </div>
          <a href="#/projects" className="text-xs font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1 group shrink-0">
            All Projects <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlightedProjects.map((project) => (
            <div key={project.id} className="group rounded-2xl border border-bg-200 hover:border-primary-200 overflow-hidden bg-bg-50 card-shadow hover:card-shadow-hover transition-all duration-300">
              {/* Thumbnail */}
              <div className="w-full h-44 relative overflow-hidden blueprint-grid flex items-center justify-center border-b border-bg-200">
                {project.thumbnail ? (
                  <img src={project.thumbnail} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <div className="flex flex-col items-center justify-center opacity-80 pointer-events-none text-center px-4">
                    <span className="font-mono text-[8px] text-primary-500 mb-1 uppercase tracking-widest">Engineering Schematic</span>
                    <span className="text-xl font-display font-extrabold text-text-700 tracking-wide">
                      {project.title.split(' ').map(n => n[0]).join('')}
                    </span>
                    <span className="mt-1.5 text-[9px] font-mono text-primary-600 bg-primary-50 border border-primary-200 px-2 py-0.5 rounded">
                      {project.category}
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5 space-y-3">
                <span className="text-[10px] font-semibold text-text-400">{project.date}</span>
                <h3 className="text-base font-bold text-text-800 group-hover:text-primary-700 transition-colors duration-200">{project.title}</h3>
                <p className="text-xs text-text-500 leading-relaxed">{project.tagline}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.skills.slice(0, 3).map((skill, j) => (
                    <span key={j} className="text-[9px] font-mono text-text-500 bg-bg-100 border border-bg-300 px-2 py-0.5 rounded">
                      {skill}
                    </span>
                  ))}
                  {project.skills.length > 3 && (
                    <span className="text-[9px] font-mono text-primary-600 px-2 py-0.5 rounded">+{project.skills.length - 3}</span>
                  )}
                </div>
                <a href={`#/project/${project.id}`} className="block w-full mt-2 py-2 text-center text-xs font-semibold text-primary-600 border border-primary-200 rounded-xl hover:bg-primary-50 transition-all duration-200">
                  Read Development Blog
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Certifications & Achievements ────────────────────────────────────── */}
      <section className="py-20 bg-bg-50 border-t border-bg-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Certs */}
          <div className="space-y-5">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-primary-600">Credentials</span>
              <h2 className="text-xl md:text-2xl font-display font-bold text-text-900 mt-1">Training & Certifications</h2>
              <div className="w-8 h-0.5 bg-primary-500 mt-2" />
            </div>
            {[
              { title: 'Computer Vision with Python and OpenCV', sub: 'IBM — Coursera' },
              { title: 'Embedded System Design with ARM', sub: 'NPTEL (Currently Pursuing)' },
              { title: 'Basic PCB Design Workshop', sub: 'Practical Electronics Layout Training' },
            ].map((cert, i) => (
              <div key={i} className="p-4 rounded-xl bg-bg-100 border border-bg-200 flex items-start gap-3 hover:border-primary-200 hover:bg-bg-50 transition-all duration-200">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-text-800">{cert.title}</h4>
                  <p className="text-xs text-text-400 mt-0.5">{cert.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="space-y-5">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-primary-600">Recognition</span>
              <h2 className="text-xl md:text-2xl font-display font-bold text-text-900 mt-1">Achievements & Activities</h2>
              <div className="w-8 h-0.5 bg-primary-500 mt-2" />
            </div>

            <div className="p-5 rounded-xl bg-bg-100 border border-bg-200 flex items-start gap-4 hover:border-primary-200 hover:bg-bg-50 transition-all duration-200">
              <div className="p-2 bg-primary-50 border border-primary-100 rounded-lg shrink-0">
                <Trophy className="w-4 h-4 text-primary-600" />
              </div>
              <div>
                <span className="text-[9px] font-mono text-text-400 uppercase tracking-widest">Competitive Chess</span>
                <h4 className="text-sm font-bold text-text-800 mt-0.5">National Runner-Up</h4>
                <p className="text-xs text-text-500 leading-relaxed mt-1">
                  Represented at national tournaments. Strategic thinking and foresight honed through competitive play translates directly to robotics algorithm design and systematic debugging.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-bg-100 border border-bg-200 flex items-start gap-4 hover:border-primary-200 hover:bg-bg-50 transition-all duration-200">
              <div className="p-2 bg-primary-50 border border-primary-100 rounded-lg shrink-0">
                <ExternalLink className="w-4 h-4 text-primary-600" />
              </div>
              <div>
                <span className="text-[9px] font-mono text-text-400 uppercase tracking-widest">Technical Outreach</span>
                <h4 className="text-sm font-bold text-text-800 mt-0.5">Active Project Documenter</h4>
                <p className="text-xs text-text-500 leading-relaxed mt-1">
                  Regularly shares engineering blueprints, 3D renders, and hardware troubleshooting notes on LinkedIn. Passionate about technical communication and open-source collaboration.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Soft Skills ──────────────────────────────────────────────────────── */}
      <section className="py-16 border-t border-bg-200 max-w-5xl mx-auto px-6 text-center space-y-6">
        <h3 className="text-sm font-semibold text-text-400 uppercase tracking-widest">Core Work Ethics</h3>
        <div className="flex flex-wrap justify-center gap-2.5">
          {['Problem Solving', 'Critical Thinking', 'Adaptability', 'Analytical Thinking', 'Continuous Learning'].map((skill, i) => (
            <span key={i} className="px-4 py-1.5 rounded-full bg-bg-50 border border-bg-300 text-xs font-medium text-text-600 hover:border-primary-300 hover:text-primary-700 hover:bg-primary-50 transition-all duration-200 cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer className="py-10 border-t border-bg-200 bg-bg-50 text-center space-y-1">
        <p className="text-[10px] text-text-300">Built with React + Vite + Tailwind v4 + Three.js · Hosted on GitHub Pages</p>
      </footer>
    </div>
  );
}
