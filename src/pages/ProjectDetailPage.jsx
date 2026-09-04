import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { ArrowLeft, Calendar, Tag, ChevronRight, Copy, Check } from 'lucide-react';
import { loadBlogContent } from '../data/blogs';

const assetBase = (() => {
  if (typeof window === 'undefined') return import.meta.env.BASE_URL || '/';

  const { pathname } = window.location;
  return pathname.endsWith('/') ? pathname : pathname.replace(/[^/]*$/, '/');
})();

function resolveAssetUrl(url) {
  if (!url) return url;
  if (/^(?:[a-z]+:)?\/\//i.test(url) || url.startsWith('data:') || url.startsWith('blob:') || url.startsWith('#')) {
    return url;
  }

  const base = assetBase.replace(/\/$/, '');
  const normalizedPath = url.replace(/^(?:\.\/|\/)+/, '');
  return `${base}/${normalizedPath}`.replace(/\/\//g, '/');
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return <button onClick={copy} className="flex items-center gap-1 text-[10px] text-text-400 hover:text-text-700 transition-colors duration-200">
    {copied ? <><Check className="w-3 h-3 text-primary-500" /><span className="text-primary-600">Copied</span></> : <><Copy className="w-3 h-3" />Copy</>}
  </button>;
}

export default function ProjectDetailPage({ projectId, projects }) {
  useEffect(() => window.scrollTo(0, 0), [projectId]);
  const project = projects.find(item => item.id === projectId);
  const [blogContent, setBlogContent] = useState('');

  useEffect(() => {
    let active = true;
    setBlogContent('');
    loadBlogContent(projectId).then(content => {
      if (active) setBlogContent(content);
    });
    return () => { active = false; };
  }, [projectId]);

  if (!project) return <div className="w-full min-h-screen bg-bg-100 flex flex-col items-center justify-center pt-28 px-6 text-center space-y-4">
    <h1 className="text-2xl font-display font-bold text-text-800">Project Not Found</h1>
    <p className="text-sm text-text-500">The requested project does not exist or has been removed.</p>
    <a href="#/projects" className="text-sm font-semibold text-primary-600 underline">Return to Projects</a>
  </div>;

  const markdownComponents = {
    h1: ({ children }) => <h2 className="text-2xl font-display font-bold text-text-900 mt-10 mb-3 pb-2 border-b border-bg-200">{children}</h2>,
    h2: ({ children }) => <h3 className="text-xl font-display font-bold text-text-800 mt-8 mb-2.5">{children}</h3>,
    h3: ({ children }) => <h4 className="text-base font-display font-bold text-text-700 mt-6 mb-2">{children}</h4>,
    p: ({ children }) => <p className="my-3 text-sm text-text-600 leading-relaxed">{children}</p>,
    ul: ({ children }) => <ul className="my-4 pl-5 list-disc space-y-1.5 text-sm text-text-600 leading-relaxed">{children}</ul>,
    ol: ({ children }) => <ol className="my-4 pl-5 list-decimal space-y-1.5 text-sm text-text-600 leading-relaxed">{children}</ol>,
    blockquote: ({ children }) => <blockquote className="my-5 p-4 rounded-xl border-l-4 border-primary-300 bg-primary-50 text-sm text-text-600">{children}</blockquote>,
    hr: () => <hr className="my-8 border-bg-200" />,
    img: ({ src, alt, ...props }) => <img {...props} src={resolveAssetUrl(src)} alt={alt || ''} className="my-6 w-full rounded-xl border border-bg-200" loading="lazy" />,
    video: ({ children, src, poster, ...props }) => <video {...props} src={resolveAssetUrl(src)} poster={resolveAssetUrl(poster)} controls preload="metadata" className="my-6 w-full rounded-xl border border-bg-200 bg-text-950" >{children}</video>,
    source: ({ src, ...props }) => <source {...props} src={resolveAssetUrl(src)} />,
    a: ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary-600 underline font-medium">{children}</a>,
    code: ({ inline, children, className }) => {
      const text = String(children).replace(/\n$/, '');
      if (inline) return <code className="px-1.5 py-0.5 rounded bg-primary-50 border border-primary-100 text-[11px] font-mono text-primary-700">{children}</code>;
      return <div className="my-5 rounded-xl overflow-hidden border border-bg-200 text-left"><div className="flex items-center justify-between px-4 py-2 bg-bg-100 border-b border-bg-200 text-[9px] text-text-400 uppercase tracking-widest font-mono"><span>{className?.replace('language-', '') || 'Code'}</span><CopyButton text={text} /></div><pre className="p-4 bg-bg-50 overflow-x-auto text-text-700 text-xs font-mono leading-relaxed whitespace-pre"><code>{text}</code></pre></div>;
    },
  };

  return <div className="w-full min-h-screen bg-bg-100 pt-28 pb-20 px-6 md:px-12 max-w-3xl mx-auto">
    <div className="flex items-center gap-1.5 text-[10px] text-text-400 font-mono mb-5"><a href="#/projects" className="hover:text-primary-600 transition-colors duration-200">PROJECTS</a><ChevronRight className="w-3 h-3" /><span className="text-text-600">{project.category.toUpperCase()}</span></div>
    <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-text-900 tracking-tight leading-tight mb-5">{project.title}</h1>
    <div className="flex flex-wrap items-center gap-4 text-xs text-text-400 pb-6 border-b border-bg-200 mb-8"><span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-primary-500" /> {project.date}</span><span className="flex items-center gap-1.5"><Tag className="w-3.5 h-3.5 text-primary-500" /> {project.category}</span><div className="flex flex-wrap gap-1.5 ml-auto">{project.skills.map(skill => <span key={skill} className="text-[9px] font-mono text-text-500 bg-bg-50 border border-bg-300 px-2 py-0.5 rounded">{skill}</span>)}</div></div>
    <div className="w-full h-56 sm:h-80 rounded-2xl overflow-hidden border border-bg-200 mb-10 blueprint-grid flex items-center justify-center relative">{project.thumbnail ? <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" /> : <div className="flex flex-col items-center text-center pointer-events-none"><span className="font-mono text-[9px] text-primary-400 mb-2 uppercase tracking-widest">Engineering Reference</span><span className="text-2xl font-display font-extrabold text-text-700">{project.title}</span></div>}</div>
     <article className="prose prose-sm max-w-none">
        {blogContent ? <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={markdownComponents}>{blogContent}</ReactMarkdown> : <div className="h-24 rounded-xl bg-bg-50 animate-pulse" />}
     </article>
    <div className="mt-14 pt-6 border-t border-bg-200"><a href="#/projects" className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-500 hover:text-primary-600 transition-colors duration-200 group"><ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-200" />Back to Projects</a></div>
  </div>;
}
