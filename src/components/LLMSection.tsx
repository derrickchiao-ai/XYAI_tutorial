import { AnimatedSection } from '@/components/AnimatedSection'
import { Brain, GraduationCap, Equal } from 'lucide-react'

const graduates = [
  { name: '小明', emoji: '👨‍💼', future: '产品经理', color: 'var(--role-pm)', cardClass: 'role-card role-card-pm' },
  { name: '小红', emoji: '👩‍🎨', future: '广告策划', color: 'var(--role-ad)', cardClass: 'role-card role-card-ad' },
  { name: '小刚', emoji: '👨‍💼', future: '公务员', color: 'var(--role-gov)', cardClass: 'role-card role-card-gov' },
]

export function LLMSection() {
  return (
    <section id="llm" className="relative">
      <div
        className="glow-orb w-72 h-72 top-20 left-10"
        style={{ background: 'hsl(var(--primary) / 0.06)' }}
      />

      <div className="section-container">
        {/* Section header */}
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-3">
            <div className="concept-number">01</div>
            <span className="section-label mb-0" style={{ color: 'hsl(var(--primary))' }}>核心概念</span>
          </div>
          <h2 className="section-title">
            大模型
            <span style={{ color: 'hsl(var(--muted-foreground))' }}> = 受过良好教育的大脑</span>
          </h2>
          <p className="section-subtitle mb-12">
            大模型就像刚从大学毕业的学生——经过系统训练，具备强大的理解力、表达力和推理能力，但还没有任何具体岗位的工作经验。
          </p>
        </AnimatedSection>

        {/* Analogy visualization */}
        <AnimatedSection delay={100}>
          <div
            className="rounded-2xl border p-8 mb-12"
            style={{
              background: 'hsl(var(--card))',
              borderColor: 'hsl(var(--border))',
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
              <span className="text-sm font-semibold">设定：三位管理学专业应届毕业生</span>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {graduates.map((g, i) => (
                <AnimatedSection key={g.name} delay={150 + i * 100}>
                  <div className={g.cardClass}>
                    <div className="text-3xl mb-3">{g.emoji}</div>
                    <div className="font-semibold mb-1">{g.name}</div>
                    <div className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                      管理学学士 · 即将成为{g.future}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Key insight */}
            <div
              className="flex items-start gap-4 rounded-xl p-5 border"
              style={{
                background: 'hsl(var(--primary) / 0.05)',
                borderColor: 'hsl(var(--primary) / 0.15)',
              }}
            >
              <Brain className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'hsl(var(--primary))' }} />
              <div>
                <div className="text-sm font-semibold mb-1">类比关键</div>
                <div className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  此刻三人的大脑就是三个<strong className="text-foreground">一模一样的大模型</strong>——
                  同一所大学、同一个专业、接受了相同的通识教育。他们聪明、善于学习、能说会写，
                  但要独立完成任何一项专业工作，还需要更多东西。
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* LLM traits */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: '通识能力强',
              desc: '什么都知道一点，能理解各种领域的信息，能进行逻辑推理和语言表达。',
              icon: '🧠',
            },
            {
              title: '无专业经验',
              desc: '虽然聪明，但没做过产品、没写过广告、也没起草过公文，不知道具体该怎么干。',
              icon: '📋',
            },
            {
              title: '可塑性极高',
              desc: '给他正确的流程指导和工作工具，就能快速成长为某个领域的专业人才。',
              icon: '🚀',
            },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={200 + i * 100}>
              <div className="role-card" style={{ background: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}>
                <div className="text-2xl mb-3">{item.icon}</div>
                <div className="font-semibold mb-2 text-sm">{item.title}</div>
                <div className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  {item.desc}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Equation */}
        <AnimatedSection delay={400}>
          <div className="mt-12 flex items-center justify-center gap-4 flex-wrap">
            <span className="px-4 py-2 rounded-lg text-sm font-medium" style={{ background: 'hsl(var(--primary) / 0.1)', color: 'hsl(var(--primary))' }}>
              大模型 (LLM)
            </span>
            <Equal className="w-4 h-4" style={{ color: 'hsl(var(--muted-foreground))' }} />
            <span className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
              "聪明但没经验的大学毕业生的大脑"
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}