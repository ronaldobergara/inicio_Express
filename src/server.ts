import express from 'express'
import routers from './Routers'

const app = express()

app.use(routers)

app.get('/', (req, res) => {
    return res.redirect('https://google.com')
})

app.listen(3000, () => {
    console.log('SERVER ON')
})

