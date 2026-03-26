import { AnimatedSection } from '@/components/AnimatedSection'
import { Monitor, Plus, Settings, MessageSquare, Zap, ArrowRight } from 'lucide-react'

const qoderFeatures = [
  {
    icon: MessageSquare,
    title: '下达任务、提要求',
    desc: '用自然语言告诉 Agent 你想要什么，不需要写代码或学习复杂的操作界面。',
    example: '"帮我分析上个月的用户流失数据，找出流失率最高的三个环节"',
  },
  {
    icon: Plus,
    title: '安装和创建 Skills',
    desc: '为 Agent 安装现成的工作流程，或根据你的实际工作创建专属 Skill。',
    example: '安装"需求分析 Skill"、创建"周报撰写 Skill"',
  },
  {
    icon: Settings,
    title: '连接 MCP 工具',
    desc: '帮 Agent 接入各种外部工具和数据源，让它真正能动手干活。',
    example: '连接数据库、接入设计工具、对接文档系统',
  },
  {
    icon: Zap,
    title: 'Agent 主动互动',
    desc: 'Agent 在执行过程中会主动向你汇报进度、遇到问题时请求确认，而不是闷头工作。',
    example: '"我发现数据有异常，需要你确认一下这个筛选条件是否正确"',
  },
]

const workflowSteps = [
  { step: '你', action: '在 Qoder 中用自然语言描述任务', arrow: true },
  { step: 'Qoder', action: '将需求翻译为 Agent 能理解的指令', arrow: true },
  { step: 'Agent', action: '调用 Skills 和 MCP 工具自主执行', arrow: true },
  { step: 'Qoder', action: '展示进度和结果，传递 Agent 的问题给你', arrow: false },
]

export function QoderSection() {
  return (
    <section id="qoder" className="relative">
      <div
        className="glow-orb w-80 h-80 bottom-0 right-10"
        style={{ background: 'hsl(var(--primary) / 0.08)', animationDelay: '2s' }}
      />

      <div className="section-container">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-3">
            <div className="concept-number">05</div>
            <span className="section-label mb-0" style={{ color: 'hsl(var(--primary))' }}>交互界面</span>
          </div>
          <h2 className="section-title">
            Qoder
            <span style={{ color: 'hsl(var(--muted-foreground))' }}> = 人与 Agent 之间的桥梁</span>
          </h2>
          <p className="section-subtitle mb-12">
            Agent 再强大，也需要一个地方让人类和它打交道。Qoder 就是这个<strong className="text-foreground">交互界面</strong>——
            帮助你管理 Agent、下达任务、查看进度，让人机协作变得简单高效。
          </p>
        </AnimatedSection>

        {/* Workflow diagram */}
        <AnimatedSection delay={100}>
          <div
            className="rounded-2xl border p-8 mb-10"
            style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
          >
            <div className="text-sm font-semibold mb-6 text-center">Qoder 的工作方式</div>

            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-3 md:gap-0">
              {workflowSteps.map((item, i) => (
                <div key={item.step + i} className="flex items-center gap-3">
                  <div
                    className="flex-1 md:flex-none px-5 py-4 rounded-xl border text-center min-w-0"
                    style={{
                      background: i === 0
                        ? 'hsl(var(--role-pm) / 0.08)'
                        : i === 2
                          ? 'hsl(var(--role-gov) / 0.08)'
                          : 'hsl(var(--primary) / 0.08)',
                      borderColor: i === 0
                        ? 'hsl(var(--role-pm) / 0.2)'
                        : i === 2
                          ? 'hsl(var(--role-gov) / 0.2)'
                          : 'hsl(var(--primary) / 0.2)',
                    }}
                  >
                    <div
                      className="text-xs font-bold mb-1"
                      style={{
                        color: i === 0
                          ? 'hsl(var(--role-pm))'
                          : i === 2
                            ? 'hsl(var(--role-gov))'
                            : 'hsl(var(--primary))',
                      }}
                    >
                      {item.step}
                    </div>
                    <div className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                      {item.action}
                    </div>
                  </div>
                  {item.arrow && (
                    <ArrowRight
                      className="w-4 h-4 flex-shrink-0 hidden md:block"
                      style={{ color: 'hsl(var(--muted-foreground))' }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {qoderFeatures.map((feat, i) => (
            <AnimatedSection key={feat.title} delay={200 + i * 80}>
              <div
                className="role-card"
                style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'hsl(var(--primary) / 0.12)' }}
                  >
                    <feat.icon className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-1">{feat.title}</div>
                    <div className="text-xs mb-2 leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                      {feat.desc}
                    </div>
                    <div
                      className="text-xs px-3 py-1.5 rounded-lg"
                      style={{
                        background: 'hsl(var(--primary) / 0.06)',
                        color: 'hsl(var(--primary))',
                        fontStyle: 'italic',
                      }}
                    >
                      {feat.example}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Key insight */}
        <AnimatedSection delay={400}>
          <div
            className="mt-8 flex items-start gap-4 rounded-xl p-5 border"
            style={{
              background: 'hsl(var(--primary) / 0.05)',
              borderColor: 'hsl(var(--primary) / 0.15)',
            }}
          >
            <Monitor className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'hsl(var(--primary))' }} />
            <div>
              <div className="text-sm font-semibold mb-1">Qoder 的定位</div>
              <div className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                如果把 Agent 比作一位能干的员工，那 Qoder 就是你和这位员工之间的<strong className="text-foreground">协作平台</strong>。
                你通过它分配任务、了解进度、给出反馈；Agent 通过它汇报工作、请示决策、交付成果。
                它让人和 AI 之间的协作变得像和同事协作一样自然。
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}