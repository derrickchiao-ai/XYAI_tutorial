import { useState } from 'react'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Plug, Wrench } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ToolItem {
  name: string
  purpose: string
  analogy: string
}

interface MCPRole {
  role: string
  color: string
  badgeClass: string
  cardClass: string
  tools: ToolItem[]
}

const mcpData: MCPRole[] = [
  {
    role: '产品经理 · 小明',
    color: 'var(--role-pm)',
    badgeClass: 'role-badge role-badge-pm',
    cardClass: 'role-card role-card-pm',
    tools: [
      {
        name: '用户调研平台',
        purpose: '下载并阅读用户原声录音和反馈文本',
        analogy: '就像 AI 调用"语音转文字"和"文档读取"工具',
      },
      {
        name: '数据分析工具',
        purpose: '连接用户数据表，查询行为数据、漏斗转化率',
        analogy: '就像 AI 调用"数据库查询"工具',
      },
      {
        name: '文档编辑器',
        purpose: '按模板撰写 PRD 需求文档',
        analogy: '就像 AI 调用"文档生成"工具',
      },
      {
        name: '项目管理系统',
        purpose: '在系统中创建需求卡片、关联到迭代计划',
        analogy: '就像 AI 调用"任务管理"工具',
      },
    ],
  },
  {
    role: '广告策划 · 小红',
    color: 'var(--role-ad)',
    badgeClass: 'role-badge role-badge-ad',
    cardClass: 'role-card role-card-ad',
    tools: [
      {
        name: '素材灵感库',
        purpose: '搜索行业优秀广告案例和创意参考',
        analogy: '就像 AI 调用"网络搜索"工具',
      },
      {
        name: '设计软件',
        purpose: '制作广告视觉效果图和排版',
        analogy: '就像 AI 调用"图片生成"工具',
      },
      {
        name: '媒介资源系统',
        purpose: '查询楼宇广告点位、人流量数据和报价',
        analogy: '就像 AI 调用"数据库查询"工具',
      },
      {
        name: '演示文稿工具',
        purpose: '制作提案 PPT，向客户做方案演示',
        analogy: '就像 AI 调用"PPT 生成"工具',
      },
    ],
  },
  {
    role: '公务员 · 小刚',
    color: 'var(--role-gov)',
    badgeClass: 'role-badge role-badge-gov',
    cardClass: 'role-card role-card-gov',
    tools: [
      {
        name: '政策文件检索系统',
        purpose: '查阅最新政策法规、上级讲话和统计年鉴',
        analogy: '就像 AI 调用"知识库检索"工具',
      },
      {
        name: '历史发言稿库',
        purpose: '参考往期发言稿的结构、措辞和风格',
        analogy: '就像 AI 调用"文档搜索"工具',
      },
      {
        name: '公文写作排版工具',
        purpose: '按党政公文标准格式排版和校对',
        analogy: '就像 AI 调用"格式化文档"工具',
      },
      {
        name: '内部审批系统',
        purpose: '将稿件提交审批流程，跟踪修改意见',
        analogy: '就像 AI 调用"工作流审批"工具',
      },
    ],
  },
]

export function MCPSection() {
  const [activeRole, setActiveRole] = useState(0)
  const current = mcpData[activeRole]

  return (
    <section id="mcp" className="relative">
      <div
        className="glow-orb w-72 h-72 top-40 left-0"
        style={{ background: 'hsl(var(--role-gov) / 0.06)', animationDelay: '1.5s' }}
      />

      <div className="section-container">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-3">
            <div className="concept-number">03</div>
            <span className="section-label mb-0" style={{ color: 'hsl(var(--primary))' }}>核心概念</span>
          </div>
          <h2 className="section-title">
            MCP
            <span style={{ color: 'hsl(var(--muted-foreground))' }}> = 工作中使用的具体工具</span>
          </h2>
          <p className="section-subtitle mb-10">
            光有流程还不够，每一步都需要<strong className="text-foreground">具体的工具</strong>来执行。
            MCP (Model Context Protocol) 就是 AI Agent 连接和调用外部工具的标准协议——就像万能插座，让 Agent 能接入各种工具。
          </p>
        </AnimatedSection>

        {/* Role selector */}
        <AnimatedSection delay={100}>
          <div className="flex gap-2 mb-8 flex-wrap">
            {mcpData.map((m, i) => (
              <button
                key={m.role}
                onClick={() => setActiveRole(i)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border',
                  activeRole === i ? 'scale-[1.02]' : 'opacity-60 hover:opacity-100'
                )}
                style={
                  activeRole === i
                    ? {
                        background: `hsl(${m.color} / 0.15)`,
                        borderColor: `hsl(${m.color} / 0.3)`,
                        color: `hsl(${m.color})`,
                      }
                    : {
                        background: 'hsl(var(--card))',
                        borderColor: 'hsl(var(--border))',
                        color: 'hsl(var(--muted-foreground))',
                      }
                }
              >
                {m.role}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Tools grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {current.tools.map((tool, i) => (
            <AnimatedSection key={tool.name} delay={150 + i * 80}>
              <div className={current.cardClass}>
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `hsl(${current.color} / 0.15)`,
                    }}
                  >
                    <Wrench className="w-4 h-4" style={{ color: `hsl(${current.color})` }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold mb-1">{tool.name}</div>
                    <div className="text-xs mb-2" style={{ color: 'hsl(var(--muted-foreground))' }}>
                      {tool.purpose}
                    </div>
                    <div
                      className="text-xs px-2.5 py-1 rounded-md inline-block"
                      style={{
                        background: `hsl(${current.color} / 0.08)`,
                        color: `hsl(${current.color})`,
                      }}
                    >
                      {tool.analogy}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Key insight */}
        <AnimatedSection delay={350}>
          <div
            className="mt-8 flex items-start gap-4 rounded-xl p-5 border"
            style={{
              background: 'hsl(var(--primary) / 0.05)',
              borderColor: 'hsl(var(--primary) / 0.15)',
            }}
          >
            <Plug className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'hsl(var(--primary))' }} />
            <div>
              <div className="text-sm font-semibold mb-1">MCP 的本质</div>
              <div className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                MCP 不是工具本身，而是<strong className="text-foreground">连接工具的标准协议</strong>。
                就像 USB 接口让各种设备都能连接电脑一样，MCP 让 AI Agent 能以统一的方式调用各种外部工具和数据源。
                有了 MCP，Agent 才能"动手干活"，而不仅仅是"纸上谈兵"。
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}