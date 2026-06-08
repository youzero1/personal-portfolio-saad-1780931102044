import { ExternalLink } from 'lucide-react';
import { projects } from '@/lib/data';
import { Project } from '@/types';

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col gap-4 hover:border-brand transition-colors">
      <h3 className="text-lg font-bold">{project.title}</h3>
      <p className="text-gray-400 text-sm flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 bg-brand/10 text-accent rounded-md border border-brand/20">
            {t}
          </span>
        ))}
      </div>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-brand hover:text-accent text-sm font-medium transition-colors"
        >
          View Project <ExternalLink size={14} />
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-brand">#</span> Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
