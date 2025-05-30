# vue2-admin-server

English | [简体中文](./README-zh.md)

> A simple server for `vue-admin-template`, providing a mock API for development and testing purposes.

## Project Overview

`vue2-admin-server` is a lightweight server built with `Express`, designed to simulate backend APIs for easier frontend development and testing. It supports cross-origin requests, authentication validation, and static resource hosting.

## Features

- **Mock API**: Provides mock interfaces for user and table-related data.
- **Cross-Origin Support**: Implements cross-origin requests using the `cors` middleware.
- **Authentication Validation**: Supports a simple token-based authentication mechanism.
- **Request Interceptor**: Logs request and response details.
- **Static Resource Hosting**: Serves static files.

## Technology Stack

- Node.js
- Express
- Mock.js

## Installation & Usage

### Clone the Repository

```bash
git clone https://github.com/LeoJ340/vue2-admin-server.git
cd vue2-admin-server
```

### Install Dependencies

```bash
npm install
```

### Start the Server

```bash
npm start
```

The server will run by default at `http://localhost:3000`.

## Project Structure

```
vue2-admin-server/
├── api/
│   ├── index.js          # Server entry file
│   ├── routes/           # Routes folder
│   │   ├── index.js      # Route registration
│   │   ├── user.js       # User-related APIs
│   │   ├── table.js      # Table-related APIs
│   └── public/           # Static resource folder
├── package.json          # Project configuration file
└── README.md             # Project documentation
```

## API Documentation

### User APIs

- `POST /api/user/login`: User login
- `POST /api/user/logout`: User logout

### Table APIs

- `GET /api/table`: Fetch table data

## Dependencies

- `express`: Web framework
- `cors`: Middleware for cross-origin requests
- `mockjs`: Tool for generating mock data
