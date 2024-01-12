const express = require('express')
const mongoose = require('mongoose')
const Clothes = require('../models/clothesModel')
const router = express.Router()


router.get('/', async(req,res) => {
    const baseURL = "http://api.weatherapi.com/v1"
    const key = "710cec0720844542804140755230212"
    const forecastExt = "current.json"

    // location from searchbar is parsed and placed into API call
    const location = req.query.location

    try {
        // 
        const response = await fetch(`http://api.weatherapi.com/v1/${ forecastExt }?key=${ key }&q=${ location }`)
        // parses response object as json
        const weatherData = await response.json()
        res.json(weatherData)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router