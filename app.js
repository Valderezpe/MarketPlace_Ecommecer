const express = require('express');


const app = express()
app.use(express.json())

app.get('/', (req, res)=>{
    return res.status(200).json({
        marketplace_loja: true
    })
})

require('./router/router')
module.exports = app;