const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('closet')
})

router.get('/add', (req, res) => {
    res.render('addCloset')
})

router.get('/delete', (req, res) => {
    res.render('delCloset')
})

module.exports = router