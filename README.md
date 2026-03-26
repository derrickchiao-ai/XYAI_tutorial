# AI Agent 概念解析培训网页

一个用通俗易懂的方式讲解 AI Agent 核心概念的交互式培训网页。

## 🎯 项目简介

通过三位大学毕业生的职场故事，深入浅出地讲解：
- **大模型** = 受过良好教育的大脑
- **Skills** = 岗位上习得的工作流程  
- **MCP** = 工作中使用的具体工具
- **Agent** = 像真人一样工作的任务引擎
- **Qoder** = 人与 Agent 之间的协作平台

## 🚀 快速开始

### 开发环境

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

### 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS + CSS Variables
- **动画**: Framer Motion
- **图标**: Lucide React

## 📁 项目结构

```
.
├── public/
│   └── images/           # 静态图片资源
├── src/
│   ├── components/       # React 组件
│   │   ├── AgentSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LLMSection.tsx
│   │   ├── MCPSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── QoderSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── SummarySection.tsx
│   │   └── AnimatedSection.tsx
│   ├── hooks/
│   │   └── useInView.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## 🎨 设计特色

- **深色主题**：现代科技感的深色界面
- **渐进式动画**：滚动触发动画，提升用户体验
- **响应式布局**：适配桌面端和移动端
- **角色化教学**：通过三个毕业生的故事让抽象概念具象化

## 📝 核心概念

### 1. 大模型 (LLM)
就像刚毕业的大学生——聪明、有潜力，但缺乏具体工作经验。

### 2. Skills
工作岗位上的标准操作流程(SOP)，教会大模型如何完成特定任务。

### 3. MCP (Model Context Protocol)
连接外部工具的标准化协议，让 Agent 能够真正"动手干活"。

### 4. Agent
大模型 + Skills + MCP + 自主性 = 能像真人一样理解需求、主动执行任务的智能体。

### 5. Qoder
人与 Agent 之间的交互界面，负责任务分配、进度跟踪和双向沟通。

## 🧠 教学理念

**心智模型转变**：与 Agent 互动时，要把它当作一个真人同事来看待——
> "不要说'执行函数A传参数B'，要说'帮我搞定这个事情'"
> 
> 给它目标和上下文，让它自己决定怎么做。

## 📸 页面截图

![首页](./screenshots/home.png)
*首页展示核心概念*

![概念详解](./screenshots/concepts.png)  
*五大概念详细解析*

## 🤝 部署指南

### Vercel (推荐)

```bash
npm run build
# 然后将 dist/ 目录部署到 Vercel
```

### 静态服务器

```bash
npm run build
npx serve dist
```

## 📄 许可证

MIT License

## 🙏 致谢

- 使用 [Qoder](https://qoder.com) 构建
- 图片由 AI 生成
- 设计灵感来源于现代 Web 应用美学

---

🎯 **记住**：和 Agent 打交道，把 Ta 当人。