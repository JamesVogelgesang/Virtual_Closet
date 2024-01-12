const express = require('express')
const mongoose = require('mongoose')
const Clothes = require('../models/clothesModel')
const router = express.Router()


router.get('/', async(req,res) => {
    try {
        const clothes = await Clothes.find({})
        res.render('index', { clothes })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router