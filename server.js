// TO DO -fix button links

const express = require('express')

const app = express()

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    res.render('index')
})

const closetRouter = require('./routes/closet')
const mainRouter = require('./routes/index')

app.use('/closet', closetRouter)
app.use('/index', mainRouter)

app.listen(3000)