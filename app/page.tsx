import { Hero } from '@/components/hero'
import { ProjectsProcessesProductsSection } from '@/components/projects-processes-products-section'
import { MethodologySection } from '@/components/methodology-section'
import { TechnologyMethodologySection } from '@/components/technology-methodology-section'
import { CompetenciesSection } from '@/components/competencies-section'
import { Features } from '@/components/features'
import { LatestPosts } from '@/components/latest-posts'
import { LabsPreview } from '@/components/labs-preview'
import { EventsSection } from '@/components/events-section'
import { Stats } from '@/components/stats'
import { ResearchProjectsSection } from '@/components/research-projects-section'

export default function HomePage() {
  return (
    <div className="space-y-20">
      <Hero />
      <ProjectsProcessesProductsSection />
      <MethodologySection />
      <CompetenciesSection />
      <Stats />
      <ResearchProjectsSection />
      <TechnologyMethodologySection />
      <Features />
      <LatestPosts />
      <LabsPreview />
      <EventsSection />
    </div>
  )
}
