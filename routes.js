const express = require('express')
const routes = express.Router()

let printa = 0

routes.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/index.html')
})

routes.get('/quest1', (req, res) => {
    res.sendFile(__dirname + '/view/quest1.html')
})

routes.post('/quest1', (req, res) => {
    data = req.body
    somavalor = Object.values(data).reduce( (x1, x2) => {
        v1 = parseInt(x1)
        v2 = parseInt(x2)
        return total = v1 + v2
    })
    printa = total
    res.send('soma'+total);
    //res.redirect('/quest1')
})

//routes.get('/qq2', (req, res) => {
   // res.send("teste: " +printa)
//})


routes.get('/quest2', (req, res) =>{
    res.sendFile(__dirname + '/view/quest2.html')
})

routes.get('/q2', (req, res) =>{
    let {v1, v2} = req.query
    printa = parseInt(v1) - parseInt(v2)
    console.log(printa)
    res.send("value: " + printa)

})
routes.post('/qq2', (req, res) =>{
    let {v1, v2} = req.body
    printa = parseInt(v1) + parseInt(v2)
    res.send("value: " + printa)
})



module.exports = routes