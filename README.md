# Selfcode

**Selfcode** 是一个 JavaScript/TypeScript 工具库，包含多个常用工具函数，支持按需引入，方便高效地用于各类前端项目。

## 项目简介

- **语言**：TypeScript
- **打包工具**：Rollup
- **测试框架**：Jest
- **目标**：提供高复用性、按需加载的工具函数库

## 功能特性

1. **类型定义支持**：包含完整的 `.d.ts` 类型文件。
2. **模块化支持**：输出多种模块格式（如 UMD、ESM）。
3. **按需引入**：仅引入需要的工具函数，减少打包体积。
4. **自动化构建**：支持清理、构建和测试的 npm 脚本。
5. **测试覆盖**：使用 Jest 进行单元测试，保证代码质量。

## 安装

使用 npm 安装项目依赖：

```
npm install
```

## 脚本命令

### 清理构建目录

```
npm run clean
```

清除 `dist` 目录中的历史构建文件。

### 构建项目

```
npm run build
```

执行完整的构建流程：

1. **清理** `dist` 目录。
2. **生成类型定义** 文件。
3. **打包 JS 文件**。

输出结果存放在 `dist` 目录中：

- `dist/utils.umd.js`：UMD 格式的工具库文件。
- `dist/types/`：类型定义文件。

### 运行测试

```
npm run test
```

运行单元测试，使用 **Jest** 进行代码测试。

## 目录结构

```
.
├── src/                # 源代码目录
├── dist/               # 打包输出目录
├── tests/              # 测试用例目录
├── tsconfig.json       # TypeScript 配置文件
├── rollup.config.js    # Rollup 打包配置文件
├── jest.config.js      # Jest 配置文件
├── package.json        # 项目配置文件
└── README.md           # 项目文档
```

## 开发指南

### 1. 添加新工具函数

1. 在 `src` 目录中创建或编辑对应的工具函数文件。
2. 编写必要的单元测试，放置于 `tests` 目录中。
3. 执行 `npm run test`，确保所有测试通过。

### 2. 构建项目

执行 `npm run build` 命令，生成新的构建文件。

### 3. 发布项目

使用 npm 发布项目：

```
npm publish
```

## 技术栈

- **TypeScript**：提供静态类型检查。
- **Rollup**：打包工具，生成多种模块格式。
- **Jest**：测试框架，确保代码功能正常。

## 依赖项

### 开发依赖

- `rollup`：模块打包工具。
- `jest`：单元测试工具。
- `@rollup/plugin-typescript`：Rollup 的 TypeScript 插件。
- `rimraf`：用于清理目录。
- `ts-jest`：Jest 的 TypeScript 支持。
- `tslib`：TypeScript 辅助库。

## 仓库地址

项目源码托管于 GitHub，欢迎 Star 和 Fork：

https://github.com/coderzhangjun/utils.git

## 许可证

[ISC](https://opensource.org/licenses/ISC)
