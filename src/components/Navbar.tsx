import { useState } from 'react'
import { cn } from '@/lib/utils'

interface NavItem {
  id: string
  label: string
}

const navItems: NavItem[] = [
  { id: 'hero', label: '首页' },
  { id: 'llm', label: '大模型' },
  { id: 'skills', label: 'Skills' },
  { id: 'mcp', label: 'MCP' },
  { id: 'agent', label: 'Agent' },
  { id: 'qoder', label: 'Qoder' },
]

export function Navbar() {
  const [active, setActive] = useState('hero')

  const handleClick = (id: string) => {
    setActive(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="text-lg font-bold tracking-tight" style={{ color: 'hsl(var(--primary))' }}>
          AI Agent 概念解析
        </span>
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={cn(
                'px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200',
                active === item.id
                  ? 'text-primary-foreground'
                  : 'hover:text-foreground'
              )}
              style={
                active === item.id
                  ? { background: 'hsl(var(--primary) / 0.15)', color: 'hsl(var(--primary))' }
                  : { color: 'hsl(var(--muted-foreground))' }
              }
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}