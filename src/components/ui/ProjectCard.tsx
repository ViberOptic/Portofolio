import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group/card relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/5 bg-black/40 p-4 transition-all duration-300 hover:border-purple-500/30 hover:bg-white/5 hover:shadow-lg hover:shadow-purple-500/10">
      
      {/* Bagian Gambar */}
      <div className="relative mb-3 h-32 w-full overflow-hidden rounded-lg bg-gray-800">
        {project.image_url ? (
          <Image
            src={project.image_url}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover/card:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-900 text-gray-700">
            <span className="text-xs">No Image</span>
          </div>
        )}
      </div>

      {/* Bagian Konten */}
      <div>
        <h4 className="text-lg font-semibold text-white group-hover/card:text-purple-400 transition-colors">
          {project.title}
        </h4>
        <p className="mt-1 line-clamp-2 text-xs text-gray-400">
          {project.description}
        </p>
      </div>

      {/* Bagian Tags */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tags?.map((tag, index) => (
          <span 
            key={index} 
            className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[10px] text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bagian Tombol Aksi */}
      <div className="mt-4 flex gap-3">
        {project.repo_url && (
          <Link
            href={project.repo_url}
            target="_blank"
            className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-[10px] text-gray-300 transition-colors hover:bg-white/20 hover:text-white"
          >
            <Github size={12} />
            <span>Code</span>
          </Link>
        )}
        {project.demo_url && (
          <Link
            href={project.demo_url}
            target="_blank"
            className="flex items-center gap-1.5 rounded-full bg-purple-500/10 px-3 py-1.5 text-[10px] text-purple-400 transition-colors hover:bg-purple-500/20 hover:text-purple-300 border border-purple-500/20"
          >
            <ExternalLink size={12} />
            <span>Demo</span>
          </Link>
        )}
      </div>
    </div>
  );
}