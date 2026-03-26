#!/bin/bash

# 打包项目脚本
# 创建一个包含所有必需文件的发布包

PROJECT_NAME="ai-agent-training"
VERSION="1.0.0"
BUILD_TIME=$(date '+%Y%m%d_%H%M%S')

echo "📦 开始打包项目..."

# 创建发布目录
RELEASE_DIR="${PROJECT_NAME}_v${VERSION}_${BUILD_TIME}"
mkdir -p "${RELEASE_DIR}"

# 复制源码
echo "📁 复制源码文件..."
cp -r src "${RELEASE_DIR}/"
cp -r public "${RELEASE_DIR}/"

# 复制配置文件
echo "⚙️  复制配置文件..."
cp package.json "${RELEASE_DIR}/"
cp package-lock.json "${RELEASE_DIR}/"
cp tsconfig.json "${RELEASE_DIR}/"
cp tsconfig.app.json "${RELEASE_DIR}/"
cp vite.config.ts "${RELEASE_DIR}/"
cp tailwind.config.ts "${RELEASE_DIR}/"
cp postcss.config.js "${RELEASE_DIR}/"
cp index.html "${RELEASE_DIR}/"
cp .gitignore "${RELEASE_DIR}/"

# 复制文档
echo "📄 复制文档..."
cp README.md "${RELEASE_DIR}/"
cp BUILD_LOG.md "${RELEASE_DIR}/"

# 创建部署说明
cat > "${RELEASE_DIR}/DEPLOY.md" << 'EOF'
# 部署说明

## 本地运行

1. 安装依赖
```bash
npm install
```

2. 启动开发服务器
```bash
npm run dev
```

3. 构建生产版本
```bash
npm run build
```

## 部署到 GitHub Pages

1. 构建项目
```bash
npm run build
```

2. 推送到 gh-pages 分支
```bash
git init
git add .
git commit -m "Deploy to GitHub Pages"
git branch -M main
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

## 部署到 Vercel

1. 安装 Vercel CLI
```bash
npm i -g vercel
```

2. 部署
```bash
vercel
```

## 部署到 Netlify

1. 构建项目
```bash
npm run build
```

2. 将 dist/ 目录拖拽到 Netlify 仪表板

## 注意事项

- 确保 Node.js 版本 >= 18
- 生产构建输出在 dist/ 目录
- 所有静态资源已包含在 public/ 目录
EOF

# 压缩打包
echo "🗜️  创建压缩包..."
tar -czf "${RELEASE_DIR}.tar.gz" "${RELEASE_DIR}"

# 清理临时目录
rm -rf "${RELEASE_DIR}"

echo "✅ 打包完成！"
echo "📦 输出文件: ${RELEASE_DIR}.tar.gz"
echo "📁 解压后即可直接运行 npm install && npm run dev"