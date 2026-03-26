import { Navbar } from '@/components/Navbar'
import { HeroSection } from '@/components/HeroSection'
import { LLMSection } from '@/components/LLMSection'
import { SkillsSection } from '@/components/SkillsSection'
import { MCPSection } from '@/components/MCPSection'
import { AgentSection } from '@/components/AgentSection'
import { QoderSection } from '@/components/QoderSection'
import { SummarySection } from '@/components/SummarySection'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <LLMSection />
      <SkillsSection />
      <MCPSection />
      <AgentSection />
      <QoderSection />
      <SummarySection />
    </div>
  )
}

export default App