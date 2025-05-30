const express = require('express');
const router = express.Router();

const { mock } = require('mockjs')
const itemTemplate = {
    id: '@id',
    title: '@sentence(5, 10)',
    'status|1': ['published', 'draft', 'deleted'],
    author: '@first',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
}
const listTemplate = [itemTemplate]

// 常规列表
router.get('/list', (req, res) => {
    const { query: { size }} = req
    const rule = `list|${size}`
    const { list } = mock({
        [rule]: listTemplate
    })
    res.json({
        code: 20000,
        data: {
            total: list.length,
            list
        }
    })
});

// 树形列表
router.get('/treeList', (req, res) => {
    const { query: { size }} = req
    const rule = `list|${size}`
    const { list } = mock({
        [rule]: [{
            ...itemTemplate,
            'children|3-8': [itemTemplate]
        }]
    })
    res.json({
        code: 20000,
        data: {
            total: list.length,
            list
        }
    })
})

// 多级表头列表
router.get('/userList', (req, res) => {
    const { query: { size }} = req
    const userInfo = {
        id: '@id',
        name: '@first',
        // 地址信息
        province: '@province',
        city: '@city',
        county: '@county',
        zip: '@zip'
    }
    const rule = `list|${size}`
    const { list } = mock({
        [rule]: [userInfo]
    })
    res.json({
        code: 20000,
        data: {
            total: list.length,
            list
        }
    })
});

module.exports = router;
