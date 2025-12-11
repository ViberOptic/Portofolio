'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { Project } from "@/types";
import ProjectCard from "@/components/ui/ProjectCard";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  
  const ITEMS_PER_PAGE = 3;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });
          
        if (error) throw error;
        if (data) setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentProjects = projects.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (direction: 'next' | 'prev') => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  // Variabel animasi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-purple-400">
              <Sparkles size={18} />
              <span className="text-sm font-medium tracking-wider uppercase">My Portfolio</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Featured <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-500">Projects</span>
            </h3>
          </div>
          
          {projects.length > 0 && (
            <span className="text-sm text-gray-500 font-mono bg-white/5 px-4 py-2 rounded-full border border-white/5">
              {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, projects.length)} of {projects.length}
            </span>
          )}
        </div>

        {/* Content Section */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <>
            <motion.div 
              key={currentPage} // PERBAIKAN UTAMA: Reset animasi saat page berubah
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              animate="visible" // Menggunakan animate agar trigger ulang saat key berubah
              variants={containerVariants}
            >
              {currentProjects.map((project) => (
                <motion.div key={project.id} variants={cardVariants}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
              
              {currentProjects.length === 0 && (
                <div className="col-span-full text-center text-gray-500 py-20 bg-white/5 rounded-2xl border border-white/5 border-dashed">
                  No projects found yet.
                </div>
              )}
            </motion.div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-6 mt-12">
                <button 
                  onClick={() => handlePageChange('prev')}
                  disabled={currentPage === 1}
                  className="group p-3 rounded-full bg-white/5 border border-white/10 hover:bg-purple-500 hover:border-purple-500 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-sm"
                  aria-label="Previous Page"
                >
                  <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
                </button>
                
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-2 w-2 rounded-full transition-all duration-300 ${
                        currentPage === i + 1 ? "bg-purple-500 w-6" : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>

                <button 
                  onClick={() => handlePageChange('next')}
                  disabled={currentPage === totalPages}
                  className="group p-3 rounded-full bg-white/5 border border-white/10 hover:bg-blue-500 hover:border-blue-500 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-sm"
                  aria-label="Next Page"
                >
                  <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            )}
          </>
        )}
      </motion.div>
    </section>
  );
}