import { useState } from 'react'
import { AnimatedSection } from '@/components/AnimatedSection'
import { Workflow, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SkillData {
  role: string
  task: string
  color: string
  badgeClass: string
  cardClass: string
  steps: { step: string; detail: string }[]
}

const skillsData: SkillData[] = [
  {
    role: '产品经理 · 小明',
    task: '完成一份需求分析报告',
    color: 'var(--role-pm)',
    badgeClass: 'role-badge role-badge-pm',
    cardClass: 'role-card role-card-pm',
    steps: [
      { step: '收集用户反馈', detail: '从多个渠道汇总用户的原声和投诉' },
      { step: '归类整理问题', detail: '按功能模块对反馈进行分类和优先级标注' },
      { step: '数据验证假设', detail: '用用户行为数据验证反馈中的痛点是否普遍' },
      { step: '定义需求优先级', detail: '结合业务目标和用户价值确定需求排序' },
      { step: '撰写 PRD 文档', detail: '将需求写成清晰的产品需求文档' },
      { step: '组织需求评审', detail: '与技术、设计团队对齐方案并获得共识' },
    ],
  },
  {
    role: '广告策划 · 小红',
    task: '为车企做一组楼宇广告方案',
    color: 'var(--role-ad)',
    badgeClass: 'role-badge role-badge-ad',
    cardClass: 'role-card role-card-ad',
    steps: [
      { step: '理解客户诉求', detail: '与客户沟通，明确品牌调性、预算和投放目标' },
      { step: '竞品与市场调研', detail: '分析竞品广告策略和目标受众特征' },
      { step: '受众画像分析', detail: '确定楼宇广告触达人群的年龄、消费力、出行习惯' },
      { step: '创意构思与脑暴', detail: '提出多个创意方向，筛选最佳方案' },
      { step: '方案设计与制作', detail: '制作视觉稿、文案和媒介排期表' },
      { step: '提案演示', detail: '向客户展示方案，根据反馈迭代优化' },
    ],
  },
  {
    role: '公务员 · 小刚',
    task: '为领导准备一份大会发言稿',
    color: 'var(--role-gov)',
    badgeClass: 'role-badge role-badge-gov',
    cardClass: 'role-card role-card-gov',
    steps: [
      { step: '明确会议背景', detail: '了解会议主题、参会人员和领导讲话定位' },
      { step: '收集政策素材', detail: '查阅最新政策文件、上级讲话和统计数据' },
      { step: '拟定讲话提纲', detail: '搭建发言稿的逻辑框架和重点段落' },
      { step: '撰写初稿', detail: '按公文规范完成发言稿的完整草稿' },
      { step: '内部审核修改', detail: '交由相关处室和领导审核，修改措辞和数据' },
      { step: '终稿定版', detail: '排版、校对后输出最终发言稿' },
    ],
  },
]

export function SkillsSection() {
  const [activeRole, setActiveRole] = useState(0)
  const current = skillsData[activeRole]

  return (
    <section id="skills" className="relative">
      <div
        className="glow-orb w-80 h-80 bottom-20 right-0"
        style={{ background: 'hsl(var(--role-ad) / 0.06)', animationDelay: '2s' }}
      />

      <div className="section-container">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-3">
            <div className="concept-number">02</div>
            <span className="section-label mb-0" style={{ color: 'hsl(var(--primary))' }}>核心概念</span>
          </div>
          <h2 className="section-title">
            Skills
            <span style={{ color: 'hsl(var(--muted-foreground))' }}> = 岗位上习得的工作流程</span>
          </h2>
          <p className="section-subtitle mb-10">
            三人入职后，各自需要学会处理具体工作任务的<strong className="text-foreground">标准流程</strong>——每一步做什么、先后顺序是什么。这套工作流程就是 Skill。
          </p>
        </AnimatedSection>

        {/* Role selector tabs */}
        <AnimatedSection delay={100}>
          <div className="flex gap-2 mb-8 flex-wrap">
            {skillsData.map((s, i) => (
              <button
                key={s.role}
                onClick={() => setActiveRole(i)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border',
                  activeRole === i ? 'scale-[1.02]' : 'opacity-60 hover:opacity-100'
                )}
                style={
                  activeRole === i
                    ? {
                        background: `hsl(${s.color} / 0.15)`,
                        borderColor: `hsl(${s.color} / 0.3)`,
                        color: `hsl(${s.color})`,
                      }
                    : {
                        background: 'hsl(var(--card))',
                        borderColor: 'hsl(var(--border))',
                        color: 'hsl(var(--muted-foreground))',
                      }
                }
              >
                {s.role}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Active skill display */}
        <AnimatedSection delay={150}>
          <div className={current.cardClass} style={{ padding: 0 }}>
            {/* Header */}
            <div
              className="p-6 border-b"
              style={{ borderColor: `hsl(${current.color} / 0.15)` }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Workflow className="w-4 h-4" style={{ color: `hsl(${current.color})` }} />
                <span className={current.badgeClass}>Skill</span>
              </div>
              <div className="font-semibold mb-1">任务：{current.task}</div>
              <div className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                以下是完成这个任务需要遵循的工作流程（每一步就是 Skill 中的一个节点）
              </div>
            </div>

            {/* Flow steps */}
            <div className="p-6">
              <div className="space-y-0">
                {current.steps.map((s, i) => (
                  <div key={s.step} className="flex gap-4">
                    {/* Timeline line */}
                    <div className="flex flex-col items-center">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                        style={{
                          background: `hsl(${current.color} / 0.15)`,
                          color: `hsl(${current.color})`,
                        }}
                      >
                        {i + 1}
                      </div>
                      {i < current.steps.length - 1 && (
                        <div
                          className="w-px flex-1 my-1"
                          style={{ background: `hsl(${current.color} / 0.15)` }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pb-5">
                      <div className="text-sm font-semibold flex items-center gap-1.5">
                        {s.step}
                        <ChevronRight className="w-3 h-3" style={{ color: 'hsl(var(--muted-foreground))' }} />
                      </div>
                      <div className="text-xs mt-0.5" style={{ color: 'hsl(var(--muted-foreground))' }}>
                        {s.detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Key insight */}
        <AnimatedSection delay={250}>
          <div
            className="mt-8 flex items-start gap-4 rounded-xl p-5 border"
            style={{
              background: 'hsl(var(--primary) / 0.05)',
              borderColor: 'hsl(var(--primary) / 0.15)',
            }}
          >
            <Workflow className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'hsl(var(--primary))' }} />
            <div>
              <div className="text-sm font-semibold mb-1">Skill 的本质</div>
              <div className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Skill 不是某一个技能点，而是完成某项任务的<strong className="text-foreground">完整工作流程</strong>。
                不同的任务需要不同的 Skill。同一个人（大模型）装上不同的 Skill，就能胜任不同的工作。
                你可以理解为：Skill 就是一份经过验证的"最佳实践 SOP"。
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}