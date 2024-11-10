const express = require('express');
const router = express.Router();

const tokens = {
    admin: {
        token: 'admin-token'
    },
    editor: {
        token: 'editor-token'
    }
}

const users = {
    'admin-token': {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
    },
    'editor-token': {
        roles: ['editor'],
        introduction: 'I am an editor',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Normal Editor'
    }
}

router.post('/login', (req, res) => {
    const { body: { username } } = req
    const token = tokens[username]
    if (!token) {
        res.json({
            code: 40001,
            message: 'Account and password are incorrect.'
        })
    } else {
        res.json({
            code: 20000,
            data: token
        })
    }
});

router.get('/info', (req, res) => {
    const { headers: { token } } = req
    const info = users[token]
    if (!info) {
        res.json({
            code: 50008,
            message: 'Login failed, unable to get user details.'
        })
    } else {
        res.json({
            code: 20000,
            data: info
        })
    }
})

router.post('/logout', (req, res) => {
    res.json({
        code: 20000
    })
});

module.exports = router;
