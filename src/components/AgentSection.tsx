import { AnimatedSection } from '@/components/AnimatedSection'
import { Bot, Brain, Workflow, Plug, Lightbulb, MessageSquare, RefreshCw, AlertCircle, User, Globe, Target } from 'lucide-react'

const agentTraits = [
  {
    icon: Lightbulb,
    title: '理解意图，而非指令',
    desc: '就像一个真正的同事——你说"帮我搞定这事"，他能理解你到底要什么，而不需要你把每一步都写成操作手册。',
    example: '你说"分析用户流失原因"，Agent 会自己判断先看数据、再看反馈、最后出报告。',
  },
  {
    icon: Workflow,
    title: '自主规划，主动执行',
    desc: 'Agent 是一个任务引擎——接到任务后会自己拆解步骤、排优先级、逐步推进，而不是等你一步步指挥。',
    example: '小红接到广告方案任务后，自行规划调研→创意→设计→提案的完整路径，一口气推进到底。',
  },
  {
    icon: RefreshCw,
    title: '遇到困难，灵活应变',
    desc: '真正的人遇到路走不通会绕道，Agent 也一样——执行中碰到问题会自行调整策略，而不是死板报错。',
    example: '小明发现数据不够，会主动回去补充用户调研，而不是硬着头皮往下写。',
  },
  {
    icon: MessageSquare,
    title: '该请示时请示，该自决时自决',
    desc: '好员工知道什么事需要汇报、什么事可以自己拿主意。Agent 也具备这种判断力，不会闷头瞎做，也不会事事都问你。',
    example: '小刚写完初稿后主动发给领导审核，而不是自以为完美直接定稿。',
  },
]

export function AgentSection() {
  return (
    <section id="agent" className="relative">
      <div
        className="glow-orb w-96 h-96 top-0 left-1/2 -translate-x-1/2"
        style={{ background: 'hsl(var(--primary) / 0.06)' }}
      />

      <div className="section-container">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-3">
            <div className="concept-number">04</div>
            <span className="section-label mb-0" style={{ color: 'hsl(var(--primary))' }}>核心概念</span>
          </div>
          <h2 className="section-title">
            Agent
            <span style={{ color: 'hsl(var(--muted-foreground))' }}> = 像真人一样工作的任务引擎</span>
          </h2>
          <p className="section-subtitle mb-12">
            把大模型、Skills、MCP 组合在一起，再赋予<strong className="text-foreground">自主思考和行动的能力</strong>，就构成了一个 Agent。
            它不是一个被动的工具，而是一个能<strong className="text-foreground">理解需求、主动响应、自主执行任务</strong>的智能体——非常像一个真正的人。
          </p>
        </AnimatedSection>

        {/* Assembly formula */}
        <AnimatedSection delay={100}>
          <div
            className="rounded-2xl border p-8 mb-8"
            style={{
              background: 'hsl(var(--card))',
              borderColor: 'hsl(var(--border))',
            }}
          >
            <div className="text-sm font-semibold mb-6 text-center">Agent 的构成</div>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              {[
                { icon: Brain, label: '大模型', sub: '聪明的大脑', color: 'var(--primary)' },
                { icon: Workflow, label: 'Skills', sub: '工作流程', color: 'var(--role-pm)' },
                { icon: Plug, label: 'MCP', sub: '工具连接', color: 'var(--role-ad)' },
                { icon: Lightbulb, label: '自主性', sub: '主动思考', color: 'var(--role-gov)' },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-3">
                  {i > 0 && (
                    <span className="text-lg font-light" style={{ color: 'hsl(var(--muted-foreground))' }}>+</span>
                  )}
                  <div
                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl border"
                    style={{
                      background: `hsl(${item.color} / 0.08)`,
                      borderColor: `hsl(${item.color} / 0.2)`,
                    }}
                  >
                    <item.icon className="w-4 h-4" style={{ color: `hsl(${item.color})` }} />
                    <div>
                      <div className="text-sm font-semibold">{item.label}</div>
                      <div className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>{item.sub}</div>
                    </div>
                  </div>
                </div>
              ))}

              <span className="text-lg font-light" style={{ color: 'hsl(var(--muted-foreground))' }}>=</span>

              <div
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl border"
                style={{
                  background: 'hsl(var(--primary) / 0.12)',
                  borderColor: 'hsl(var(--primary) / 0.3)',
                  boxShadow: 'var(--shadow-glow-primary)',
                }}
              >
                <Bot className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
                <div>
                  <div className="text-sm font-bold" style={{ color: 'hsl(var(--primary))' }}>Agent</div>
                  <div className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>任务引擎</div>
                </div>
              </div>
            </div>

            {/* Agent vs just LLM */}
            <div className="grid md:grid-cols-2 gap-4">
              <div
                className="rounded-xl p-5 border"
                style={{
                  background: 'hsl(var(--destructive) / 0.05)',
                  borderColor: 'hsl(var(--destructive) / 0.15)',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-4 h-4" style={{ color: 'hsl(var(--destructive))' }} />
                  <span className="text-sm font-semibold">只有大模型（不是 Agent）</span>
                </div>
                <ul className="space-y-2 text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  <li>你问一句，它答一句，被动响应</li>
                  <li>不会主动去查数据、找资料</li>
                  <li>不知道下一步该做什么</li>
                  <li>给出建议但不会动手执行</li>
                </ul>
              </div>

              <div
                className="rounded-xl p-5 border"
                style={{
                  background: 'hsl(var(--role-gov) / 0.05)',
                  borderColor: 'hsl(var(--role-gov) / 0.15)',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Bot className="w-4 h-4" style={{ color: 'hsl(var(--role-gov))' }} />
                  <span className="text-sm font-semibold">Agent（像真人一样的任务引擎）</span>
                </div>
                <ul className="space-y-2 text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  <li>理解你的意图，自主制定执行计划</li>
                  <li>主动调用工具查数据、生成文档</li>
                  <li>遇到问题会灵活调整策略重新尝试</li>
                  <li>关键节点主动向你汇报和请示</li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Core mindset callout */}
        <AnimatedSection delay={120}>
          <div
            className="rounded-2xl border p-6 mb-10"
            style={{
              background: 'hsl(var(--primary) / 0.06)',
              borderColor: 'hsl(var(--primary) / 0.2)',
              boxShadow: 'var(--shadow-glow-primary)',
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'hsl(var(--primary) / 0.15)' }}
              >
                <User className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <div>
                <div className="text-base font-bold mb-2">核心心智模型：把 Agent 当人看</div>
                <div className="text-sm leading-relaxed mb-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  和 Agent 互动时，最重要的思维转变是——<strong className="text-foreground">不要把它当工具，要把它当人</strong>。
                  你不会对一个同事说"执行函数 A，传参数 B"，你会说"帮我搞定这个事情"。
                  Agent 也是一样：你给它目标和上下文，它自己决定怎么干。
                </div>
                <div className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  就像你跟一个新来的同事交代工作——你告诉他要做什么、背景是什么、标准是什么，然后他自己去执行，遇到拿不准的再来问你。
                  <strong className="text-foreground">这就是人和 Agent 之间最自然的协作方式。</strong>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Domain Agent vs General Agent */}
        <AnimatedSection delay={150}>
          <div className="text-sm font-semibold mb-5">Agent 的两种形态</div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <AnimatedSection delay={180}>
            <div
              className="role-card h-full"
              style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'hsl(var(--role-pm) / 0.12)' }}
                >
                  <Target className="w-4 h-4" style={{ color: 'hsl(var(--role-pm))' }} />
                </div>
                <div>
                  <div className="text-sm font-semibold mb-1">领域专家 Agent</div>
                  <div className="text-xs mb-3 leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    当 Agent 只装配了某个领域的 Skills 和 MCP 工具时，它就是该领域的专家——像一个深耕多年的老手，在自己的领域内高效、专业、可靠。
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { label: '需求分析专家', desc: '专精产品需求挖掘和 PRD 撰写' },
                      { label: '广告策划专家', desc: '专精创意方案设计和媒介规划' },
                      { label: '公文写作专家', desc: '专精政务文稿和公文规范' },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-lg"
                        style={{ background: 'hsl(var(--role-pm) / 0.06)', color: 'hsl(var(--role-pm))' }}
                      >
                        <span className="font-medium">{item.label}</span>
                        <span style={{ color: 'hsl(var(--muted-foreground))' }}>— {item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={220}>
            <div
              className="role-card h-full"
              style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'hsl(var(--role-ad) / 0.12)' }}
                >
                  <Globe className="w-4 h-4" style={{ color: 'hsl(var(--role-ad))' }} />
                </div>
                <div>
                  <div className="text-sm font-semibold mb-1">通用 Agent</div>
                  <div className="text-xs mb-3 leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    当 Agent 装配了足够多的 Skills 和 MCP 工具，能应对各种不同领域的任务时，它就成了通用 Agent——像一个全能型人才，什么活儿都能接、都能干。
                  </div>
                  <div
                    className="text-xs px-3 py-2 rounded-lg leading-relaxed"
                    style={{ background: 'hsl(var(--role-ad) / 0.06)', color: 'hsl(var(--role-ad))' }}
                  >
                    回到我们的故事：如果一个人同时掌握了产品经理、广告策划、公务员三套 Skills，并且拥有所有必要的工具——那他就是一个"通用人才"，什么工作都能胜任。通用 Agent 也是同理。
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Agent key traits */}
        <AnimatedSection delay={250}>
          <div className="text-sm font-semibold mb-5">为什么说 Agent 像真人？四个关键特征</div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-4">
          {agentTraits.map((trait, i) => (
            <AnimatedSection key={trait.title} delay={280 + i * 80}>
              <div
                className="role-card"
                style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'hsl(var(--primary) / 0.12)' }}
                  >
                    <trait.icon className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-1">{trait.title}</div>
                    <div className="text-xs mb-2 leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                      {trait.desc}
                    </div>
                    <div
                      className="text-xs px-3 py-1.5 rounded-lg leading-relaxed"
                      style={{
                        background: 'hsl(var(--primary) / 0.06)',
                        color: 'hsl(var(--primary))',
                      }}
                    >
                      {trait.example}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Image */}
        <AnimatedSection delay={500}>
          <div className="mt-12 flex justify-center">
            <div className="relative max-w-md w-full">
              <div
                className="absolute inset-0 rounded-2xl blur-2xl"
                style={{ background: 'hsl(var(--primary) / 0.08)' }}
              />
              <img
                src={`${import.meta.env.BASE_URL}images/agent-assembly.png`}
                alt="Agent 组成示意"
                className="relative w-full rounded-2xl"
                loading="eager"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}