import { AnimatedSection } from '@/components/AnimatedSection'
import { Brain, Sparkles, Monitor } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background glow orbs */}
      <div
        className="glow-orb w-96 h-96 -top-20 -left-20"
        style={{ background: 'hsl(var(--primary) / 0.08)' }}
      />
      <div
        className="glow-orb w-80 h-80 top-1/3 right-0"
        style={{ background: 'hsl(var(--role-pm) / 0.06)', animationDelay: '1s' }}
      />

      <div className="section-container relative z-10 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <AnimatedSection>
              <div className="section-label" style={{ color: 'hsl(var(--primary))' }}>
                <Sparkles className="inline w-3.5 h-3.5 mr-1.5 -mt-0.5" />
                AI Agent 培训课程
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-6">
                用
                <span style={{ color: 'hsl(var(--primary))' }}> 人话 </span>
                讲清楚
                <br />
                AI Agent
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="section-subtitle mb-8">
                通过三个大学毕业生的真实职场故事，带你理解大模型、Skills、MCP 和 Agent 的核心概念——无需任何技术背景。
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex flex-wrap items-center gap-3">
                {[
                  { icon: Brain, label: '大模型', color: 'var(--primary)' },
                  { icon: Sparkles, label: 'Skills', color: 'var(--role-pm)' },
                  { icon: Sparkles, label: 'MCP', color: 'var(--role-ad)' },
                  { icon: Sparkles, label: 'Agent', color: 'var(--role-gov)' },
                ].map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border"
                    style={{
                      background: `hsl(${item.color} / 0.1)`,
                      borderColor: `hsl(${item.color} / 0.2)`,
                      color: `hsl(${item.color})`,
                    }}
                  >
                    <item.icon className="w-3.5 h-3.5" />
                    {item.label}
                  </span>
                ))}

                {/* Separator */}
                <span
                  className="text-xs font-medium px-1"
                  style={{ color: 'hsl(var(--muted-foreground) / 0.4)' }}
                >
                  +
                </span>

                {/* Qoder - visually distinct as interface layer */}
                <span
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border border-dashed"
                  style={{
                    background: 'transparent',
                    borderColor: 'hsl(var(--primary) / 0.3)',
                    color: 'hsl(var(--primary) / 0.7)',
                  }}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  Qoder
                  <span
                    className="text-xs ml-0.5"
                    style={{ color: 'hsl(var(--muted-foreground))' }}
                  >
                    交互界面
                  </span>
                </span>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: Hero image */}
          <AnimatedSection delay={200}>
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl blur-2xl"
                style={{ background: 'hsl(var(--primary) / 0.1)' }}
              />
              <img
                src={`${import.meta.env.BASE_URL}images/hero-brain.png`}
                alt="AI 大脑神经网络"
                className="relative w-full rounded-2xl"
                loading="eager"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <AnimatedSection delay={500}>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>向下滚动</span>
            <div
              className="w-5 h-8 rounded-full border-2 flex items-start justify-center p-1"
              style={{ borderColor: 'hsl(var(--border))' }}
            >
              <div
                className="w-1 h-2 rounded-full animate-bounce"
                style={{ background: 'hsl(var(--primary))' }}
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}