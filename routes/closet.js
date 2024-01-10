const express = require('express')
const mongoose = require('mongoose')
const Clothes = require('../models/clothesModel')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('closet')
})

router.get('/add', async(req, res) => {
    //res.render('addCloset')
    try {
        const clothes = await Clothes.find({})
        res.status(200).json(clothes)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

router.get('/add/:id', async(req,res) => {
    try {
        const {id} = req.params
        const clothe = await Clothes.findById(id)
        res.status(200).json(clothe)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/closet', async (req, res) => {
    try {
        const clothes = await Clothes.create(req.body)
        res.status(200).json(clothes)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

router.get('/delete', (req, res) => {
    res.render('delCloset')
})

module.exports = router