const express = require('express')
const app = express();
const massive = require('massive')
require("dotenv").config()
const{add, getOne, getAll, updateIt, deleteIt} = require('./Controller/store_controller')
app.use(express.json())
const {CONNECTION_STRING} = process.env;
console.log(CONNECTION_STRING)

let db;
massive(CONNECTION_STRING).then(dbInstance => {
    console.log('databass firing')
    app.set('db', dbInstance)
});
const port = 4000

app.get('/api/products', getAll)

app.get('/api/product/:id',  getOne)

app.post('/api/product', add)

app.delete('/api/product/:id' , deleteIt)

app.put('/api/product/:id' ,updateIt)
 



app.listen({port}, () => console.log(`app hears you out on ${port}`) )