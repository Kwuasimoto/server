const express = require('express');
const cors = require('cors');
const lowDb = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const bodyParser = require('body-parser')
const {nanoid} = require('nanoid')
const axios = require('axios')
const fs = require('fs');
const { type } = require('os');
const { json } = require('express');
const { URL } = require('url');

const db = lowDb(new FileSync('trades.json'))

// Set the default values for the database.!!
db.defaults({ trades: []}).write()

const app = express()
app.use(cors())
app.use(bodyParser.json())

const PORT = process.env.PORT || 5555

app.get('/trade', (req, res) => {
    const data = db.get('trades').value();

    console.log(data)
    return res.json(data)
})

app.post('/trade/new' , (req, res) => {
    const trade = req.body

    db.get('trades').push({
        ...trade, id: nanoid()
    }).write()
    
    console.log({success:true})
    res.json({success:true})
})

app.get('/checkprofits', async (req, res) => {
    const localString = `http://localhost:${process.env.PORT}/trade`

    const {data} = await axios('http://lowdb-dockerdemo.herokuapp.com/trade')
    try{
        console.log(data)

        // Rewrite json file
       
        //fs.unlinkSync('./trades.json')
        db.get('trades').push(data).write()

        const trades = db.get('trades').value();
        
        res.send()
    } catch (e){
        console.log(e.message)
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
// Edit to trigger auto Reset Db