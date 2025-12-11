'use client'
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Project } from "@/types";
import GlassCard from "@/components/ui/GlassCard";
import ProjectCard from "@/components/ui/ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 3;

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
      if (data) setProjects(data);
      if (error) console.error("Error fetching projects:", error);
      setLoading(false);
    };
    fetchProjects();
  }, []);

  // Pagination Logic
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <GlassCard className="w-full relative group min-h-[500px] flex flex-col">
        <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        
        <div className="flex justify-between items-end mb-6 relative z-10">
          <h3 className="text-2xl font-bold text-white">Featured Projects</h3>
          <span className="text-xs text-gray-500">
            Showing {currentProjects.length > 0 ? indexOfFirstItem + 1 : 0}-{Math.min(indexOfLastItem, projects.length)} of {projects.length}
          </span>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-500 grow">Loading projects...</div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10 grow">
              {currentProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
              {currentProjects.length === 0 && (
                <div className="col-span-full text-center text-gray-500 py-10">
                  No projects found.
                </div>
              )}
            </div>

            {/* Pagination Controls */}
            {projects.length > ITEMS_PER_PAGE && (
              <div className="flex justify-center items-center gap-4 mt-8 relative z-10 pt-4 border-t border-white/5">
                <button 
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="p-2 rounded-full hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-white"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <span className="text-sm text-gray-400 font-mono">
                  {currentPage} of {totalPages}
                </span>

                <button 
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-full hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-white"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </>
        )}
      </GlassCard>
    </section>
  );
}