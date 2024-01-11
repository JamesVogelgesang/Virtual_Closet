const express = require('express')
const mongoose = require('mongoose')
const Clothes = require('../models/clothesModel')
const router = express.Router()


// router.get('/', (req, res) => {
//     res.render('closet')
// })

router.get('/', async(req, res) => {
    try {
        const clothes = await Clothes.find({})
        res.render('closet', { clothes })
        // res.status(200).json(clothes)
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

router.post('/', async (req, res) => {
    try {
        const clothes = await Clothes.create(req.body)
        res.status(200).json(clothes)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

router.put('/add/:id', async(req,res) => {
    try {
        const {id} = req.params
        const clothe = await Clothes.findByIdAndUpdate(id, req.body)
        if(!clothe){
            return res.status(404).json({message: `cannot find any clothing with this ID ${id}`})
        }
        const updatedClothe = await Clothes.findById(id)
        res.status(200).json(updatedClothe)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.delete('/delete/:id', async(req, res) => {
    try {
        const {id} = req.params
        const clothe = await Clothes.findByIdAndDelete(id)
        if(!clothe){
            return res.status(404).json({message : `cannot find any clothing with this ID ${id}`})
        }
        res.status(200).json(clothe)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router