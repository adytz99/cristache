"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Info, ArrowRight, User } from "lucide-react"
import Image from "next/image"
import { useInView } from "@/hooks/use-in-view"

import { projects } from "@/lib/projects-data"

const darkLogoBackground = new Set(["nimfauna", "romina-eu", "romina-ro", "prodigital", "gasesti-orice"])

const ProjectCard = ({ project, dictionary, onSelectProject }: any) => {
  const { ref, isInView } = useInView({ threshold: 0.5 })

  return (
    <div
      ref={ref}
      className="group relative bg-[#e5e7eb] rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-beige/10 min-h-[500px] flex flex-col lg:flex-row"
    >
      {/* Content Section (Left) */}
      <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between relative z-10">
        <div className="space-y-6">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-black text-white text-sm font-medium tracking-wide w-fit">
            {project.title}
          </div>
          <div className="space-y-2">
            <div className="text-slate-500 font-medium tracking-wide uppercase text-sm">
              {project.categoryLabel}
            </div>
            <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 font-serif leading-tight">
              {project.title}
            </h3>
          </div>
          <p className="text-slate-600 text-lg leading-relaxed max-w-md">
            {project.description}
          </p>
          {project.outcome && (
            <div className="max-w-md rounded-r-xl border-l-4 border-beige-deep bg-beige/40 py-3 pl-4 pr-3">
              <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#7a6446]">
                {dictionary.portfolio.resultLabel}
              </div>
              <p className="font-medium leading-snug text-slate-900">{project.outcome}</p>
            </div>
          )}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech: string, idx: number) => (
              <span key={idx} className="px-3 py-1 bg-slate-300/50 text-slate-700 text-xs font-semibold rounded-md uppercase tracking-wider">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-12 space-y-8">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              {dictionary.portfolio.developedBy}
            </span>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-300 flex items-center justify-center overflow-hidden border-2 border-white">
                 <User className="h-6 w-6 text-slate-500" />
              </div>
              <span className="text-slate-900 font-medium">Cristache</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 items-center pt-4 border-t border-slate-300/50">
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-900 font-semibold hover:text-beige-deep transition-colors group/link"
            >
              <ArrowRight className="h-5 w-5 transition-transform group-hover/link:translate-x-1" />
              {dictionary.portfolio.visitSite}
            </a>
            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-semibold text-slate-900 transition-colors hover:text-beige-deep"
              >
                <ExternalLink className="h-5 w-5" />
                {dictionary.portfolio.viewAppStore}
              </a>
            )}
            <button 
              onClick={() => onSelectProject(project)}
              className="flex items-center gap-2 text-slate-500 font-medium hover:text-slate-900 transition-colors"
            >
              <Info className="h-5 w-5" />
              {dictionary.portfolio.details}
            </button>
          </div>
        </div>
      </div>

      <div className="relative min-h-[460px] flex-1 self-stretch overflow-hidden bg-black">
        <div
          className={`absolute inset-0 transition-transform duration-1000 ease-out ${
            isInView ? "translate-x-0 translate-y-0" : "translate-x-full lg:translate-x-12 lg:translate-y-12"
          } lg:group-hover:translate-x-4 lg:group-hover:translate-y-4`}
        >
          <Image
            src={project.id === "landauto" ? "/images/mockups/landauto-site.webp" : `/images/mockups/${project.id}.webp`}
            alt={`${project.title}: ${project.description}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 720px"
            quality={95}
          />
        </div>
      </div>
    </div>
  )
}

export function PortfolioGrid({ dictionary }: { dictionary: any }) {
  const [activeCategory, setActiveCategory] = useState("toate")
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const categories = [
    { id: "toate", label: dictionary.portfolio.categories.all },
    { id: "web", label: dictionary.portfolio.categories.web },
    { id: "ecommerce", label: dictionary.portfolio.categories.ecommerce },
    { id: "automation", label: dictionary.portfolio.categories.automation },
    { id: "mobile", label: dictionary.portfolio.categories.mobile },
  ]

  const filteredProjects =
    activeCategory === "toate" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="space-y-16">
      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-beige hover:bg-white text-slate-900"
                : "border-slate-600 text-slate-300 hover:border-beige hover:text-beige"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Projects Stack */}
      <div className="space-y-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            dictionary={dictionary}
            onSelectProject={setSelectedProject}
          />
        ))}
      </div>

      {/* Project Modal (kept mostly same but styled to match) */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-black border border-slate-800 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white font-serif">{selectedProject.title}</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedProject(null)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </Button>
            </div>

            <div className="space-y-8">
              <div
                className={`flex h-40 items-center justify-center rounded-xl px-8 ${
                  darkLogoBackground.has(selectedProject.id) ? "border border-slate-800 bg-black" : "bg-[#F6F1EA]"
                }`}
              >
                <Image
                  src={`/images/logos/${selectedProject.id}.png`}
                  alt={`Logo ${selectedProject.title}`}
                  width={320}
                  height={120}
                  className="h-auto max-h-24 w-auto max-w-[280px] object-contain"
                />
              </div>

              <div>
                <Badge className="mb-4 bg-beige text-black">
                  {selectedProject.categoryLabel}
                </Badge>
                <p className="text-slate-300 leading-relaxed text-lg">{selectedProject.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">{dictionary.portfolio.techTitle}</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string, idx: number) => (
                      <span key={idx} className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-sm rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">{dictionary.portfolio.featuresTitle}</h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center text-slate-300">
                        <div className="h-1.5 w-1.5 bg-beige-deep rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button className="bg-beige hover:bg-white text-slate-900 flex-1 py-6 text-lg" asChild>
                  <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5 mr-2" />
                    {dictionary.portfolio.visitSite}
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white py-6"
                  onClick={() => setSelectedProject(null)}
                >
                  {dictionary.portfolio.close}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="text-center pt-16">
        <h2 className="text-3xl font-bold text-white mb-4">{dictionary.portfolio.ctaTitle}</h2>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg">
          {dictionary.portfolio.ctaDesc}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-beige hover:bg-white text-slate-900 font-semibold px-8 py-4 text-lg rounded-full" asChild>
            <a href="/contact">
              {dictionary.portfolio.ctaConsultation}
            </a>
          </Button>
          <Button
            variant="outline"
            className="border-slate-600 text-beige hover:bg-slate-800 hover:text-beige px-8 py-4 text-lg rounded-full"
            asChild
          >
            <a href="/contact">{dictionary.portfolio.ctaContact}</a>
          </Button>
        </div>
      </div>
    </div>
  )
}