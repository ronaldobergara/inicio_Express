import express from 'express'

const app = express()

app.get('/', (req, res) => {
    return res.json({
        msg: "HELLO WORLD"
    })
})

app.listen(3000, () => {
    console.log('SERVER ON')
})

