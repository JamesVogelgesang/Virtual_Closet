const express = require('express')
const mongoose = require('mongoose')
const Clothes = require('./models/clothesModel')
const app = express()

app.use(express.json())

// allows form data to be processed!!
app.use(express.urlencoded({extended: false}))

app.use(express.static("public"))

app.set('view engine', 'ejs')

app.get('/', async(req,res) => {
    try {
        const clothes = await Clothes.find({})
        res.render('index', { clothes })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

const closetRouter = require('./routes/closet')
const mainRouter = require('./routes/index')

app.use('/closet', closetRouter)
app.use('/index', mainRouter)

mongoose.connect('mongodb+srv://james:727965@virtualcloset.zfnghw4.mongodb.net/')
.then(() => {
    console.log('Connected to MongoDB')
    app.listen(3000, () => {
        console.log(`Virtual Closet API running on port 3000`)
    })
}).catch((error) => {
    console.log(error)
})

