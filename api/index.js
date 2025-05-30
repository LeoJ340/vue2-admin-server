const express = require('express');
const path = require('path');

const app = express();
const cors = require('cors');

// 静态资源服务中间件
app.use(express.static(path.join(__dirname, 'public')));
// 解析json请求体中间件
app.use(express.json());

// cors
app.use(cors({
    origin: ['https://vue2-element-admin-gamma.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// 拦截器中间件
const interceptorMiddleware = (req, res, next) => {
    const { method, url } = req
    console.info(`${method} ${url} - Request on ${Date.now()}`)
    res.on('finish', () => {
        console.info(`${method} ${url} - Response Sent on ${Date.now()}`);
    });
    next();
};
app.use(interceptorMiddleware);

// 认证校验中间件
function authMiddleware(req, res, next) {
    // 接口白名单
    const whiteList = ['/api/user/login', '/api/user/logout']
    const { url, headers: { token } } = req
    if (whiteList.includes(url)) return next()
    if (token) return next()
    res.json({
        code: 50014
    })
}
app.use(authMiddleware)

// 路由
const router = require('./routes')
router(app)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.info(`Server is running on port ${PORT}`)
})
