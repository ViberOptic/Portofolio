import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col h-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20">
      
      {/* Image Container with Zoom Effect */}
      <div className="relative h-48 w-full overflow-hidden">
        {project.image_url ? (
          <Image
            src={project.image_url}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-900/50">
            <span className="text-sm text-gray-500">No Preview</span>
          </div>
        )}
        {/* Overlay Gradient on Image */}
        {/* PERBAIKAN: bg-gradient-to-t -> bg-linear-to-t */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between">
          <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
            {project.title}
          </h4>
        </div>
        
        {/* PERBAIKAN: flex-grow -> grow */}
        <p className="mt-2 text-sm text-gray-400 line-clamp-2 grow">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags?.slice(0, 3).map((tag, index) => (
            <span 
              key={index} 
              className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5"
            >
              {tag}
            </span>
          ))}
          {project.tags && project.tags.length > 3 && (
             <span className="text-[10px] px-2 py-1 text-gray-500">+{project.tags.length - 3}</span>
          )}
        </div>

        {/* Actions - Always visible but enhanced hover */}
        <div className="mt-6 flex items-center gap-3 pt-4 border-t border-white/5">
          {project.repo_url && (
            <Link
              href={project.repo_url}
              target="_blank"
              className="flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white transition-colors"
            >
              <Github size={14} />
              Code
            </Link>
          )}
          {project.demo_url && (
            <Link
              href={project.demo_url}
              target="_blank"
              className={cn(
                "ml-auto flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium transition-all",
                "bg-purple-600 text-white hover:bg-purple-500 shadow-lg shadow-purple-900/20"
              )}
            >
              Live Demo
              <ExternalLink size={12} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}