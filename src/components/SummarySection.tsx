import { AnimatedSection } from '@/components/AnimatedSection'
import { Brain, Workflow, Plug, Bot, Monitor } from 'lucide-react'

const concepts = [
  {
    icon: Brain,
    label: '大模型',
    analogy: '受过良好教育的大脑',
    desc: '具备通识能力，但无专业经验',
  },
  {
    icon: Workflow,
    label: 'Skills',
    analogy: '习得的工作流程',
    desc: '完成特定任务的标准化步骤',
  },
  {
    icon: Plug,
    label: 'MCP',
    analogy: '工作中使用的工具',
    desc: '连接外部工具的标准协议',
  },
  {
    icon: Bot,
    label: 'Agent',
    analogy: '像真人一样的任务引擎',
    desc: '理解需求、主动响应、自主执行',
  },
  {
    icon: Monitor,
    label: 'Qoder',
    analogy: '人与 Agent 的协作平台',
    desc: '管理 Agent、下达任务、互动反馈',
  },
]

export function SummarySection() {
  return (
    <section className="relative">
      <div className="section-container">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="section-title">全景回顾</h2>
            <p className="section-subtitle mx-auto text-center">
              五个概念，一个故事，一套完整的 AI Agent 知识框架。
            </p>
          </div>
        </AnimatedSection>

        {/* Summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {concepts.map((c, i) => (
            <AnimatedSection key={c.label} delay={i * 80}>
              <div
                className="role-card text-center h-full"
                style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: 'hsl(var(--primary) / 0.12)' }}
                >
                  <c.icon className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
                </div>
                <div className="text-sm font-bold mb-1">{c.label}</div>
                <div className="text-xs font-medium mb-2" style={{ color: 'hsl(var(--primary))' }}>
                  {c.analogy}
                </div>
                <div className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  {c.desc}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Story image */}
        <AnimatedSection delay={300}>
          <div className="relative max-w-4xl mx-auto mb-12">
            <div
              className="absolute inset-0 rounded-2xl blur-2xl"
              style={{ background: 'hsl(var(--primary) / 0.06)' }}
            />
            <img
              src={`${import.meta.env.BASE_URL}images/three-graduates.png`}
              alt="三位毕业生的职场故事"
              className="relative w-full rounded-2xl"
              loading="eager"
            />
          </div>
        </AnimatedSection>

        {/* Final message */}
        <AnimatedSection delay={400}>
          <div
            className="text-center rounded-2xl border p-10"
            style={{
              background: 'hsl(var(--primary) / 0.05)',
              borderColor: 'hsl(var(--primary) / 0.15)',
              boxShadow: 'var(--shadow-glow-primary)',
            }}
          >
            <div className="text-2xl font-bold mb-6">
              一句话总结
            </div>
            <div className="space-y-3 text-base max-w-2xl mx-auto">
              <p style={{ color: 'hsl(var(--muted-foreground))' }}>
                <strong className="text-foreground">大模型</strong>是聪明的大脑
              </p>
              <p style={{ color: 'hsl(var(--muted-foreground))' }}>
                <strong className="text-foreground">Skills</strong> 教 Ta 怎么做事
              </p>
              <p style={{ color: 'hsl(var(--muted-foreground))' }}>
                <strong className="text-foreground">MCP</strong> 给 Ta 干活的工具
              </p>
              <p style={{ color: 'hsl(var(--muted-foreground))' }}>
                三者合一再加上自主思考，就成了 <strong className="text-foreground">Agent</strong>
              </p>
              <p style={{ color: 'hsl(var(--muted-foreground))' }}>
                ——一个像真人一样能理解需求、主动执行任务的引擎
              </p>
              <p style={{ color: 'hsl(var(--muted-foreground))' }}>
                而 <strong className="text-foreground">Qoder</strong> 是你和 Agent 之间沟通协作的桥梁
              </p>
              <p className="pt-2 text-foreground font-semibold">
                记住：和 Agent 打交道，把 Ta 当人
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Footer */}
        <div className="mt-16 text-center text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
          AI Agent 概念培训
        </div>
      </div>
    </section>
  )
}