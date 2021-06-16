
const express = require('express')
const app = express()

const { storiesRouter } = require('./controllers/stories.js')
const { WhichWayRouter } = require('./controllers/WhichWay.js')
// const { characterRouter } = require('./controllers/character.js')

app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.use(express.static(`${__dirname}/client/build`))

app.use('/api/stories', storiesRouter)
app.use('/api/which-way', WhichWayRouter)

// app.use('/api/character', characterRouter)

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
