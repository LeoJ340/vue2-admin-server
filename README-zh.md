# vue2-admin-server

> 一个简单的服务器，为 `vue-admin-template` 提供开发和测试用的 Mock API。

## 项目简介

`vue2-admin-server` 是基于 `Express` 构建的轻量级服务器，主要用于模拟后端 API，方便前端开发和测试。支持跨域请求、认证校验以及静态资源服务。

## 功能特性

- **Mock API**：提供用户和表格相关的模拟接口。
- **跨域支持**：通过 `cors` 中间件实现跨域请求。
- **认证校验**：支持简单的 Token 验证机制。
- **请求拦截器**：记录请求和响应的日志。
- **静态资源服务**：支持静态文件的托管。

## 技术栈

- Node.js
- Express
- Mock.js

## 安装与运行

### 克隆项目

```bash
git clone https://github.com/LeoJ340/vue2-admin-server.git
cd vue2-admin-server
```

### 安装依赖

```bash
npm install
```

### 启动服务器

```bash
npm start
```

服务器默认运行在 `http://localhost:3000`。

## 项目结构

```
vue2-admin-server/
├── api/
│   ├── index.js          # 服务器入口文件
│   ├── routes/           # 路由文件夹
│   │   ├── index.js      # 路由注册
│   │   ├── user.js       # 用户相关接口
│   │   ├── table.js      # 表格相关接口
│   └── public/           # 静态资源文件夹
├── package.json          # 项目配置文件
└── README.md             # 项目说明文件
```

## 接口说明

### 用户相关接口

- `POST /api/user/login`：用户登录
- `POST /api/user/logout`：用户登出

### 表格相关接口

- `GET /api/table`：获取表格数据

## 依赖

- `express`：Web 框架
- `cors`：跨域中间件
- `mockjs`：Mock 数据生成工具
