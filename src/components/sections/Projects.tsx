'use client'
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Project } from "@/types";
import GlassCard from "@/components/ui/GlassCard";
import ProjectCard from "@/components/ui/ProjectCard";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from('projects').select('*');
      if (data) setProjects(data);
      if (error) console.error("Error fetching projects:", error);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <GlassCard className="w-full relative group">
        <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        <div className="flex justify-between items-end mb-6 relative z-10">
          <h3 className="text-2xl font-bold text-white">Featured Projects</h3>
          <span className="text-xs text-gray-500">{projects.length} Projects found</span>
        </div>

        {loading ? (
          <div className="text-center py-10 text-gray-500">Loading projects...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </GlassCard>
    </section>
  );
}