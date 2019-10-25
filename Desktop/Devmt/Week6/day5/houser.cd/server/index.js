require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const {readListings} = require('./controller/controller')
const app = express()
app.use(express.json())

let {CONNECTION_STRING, SESSION_SECRET} = process.env

massive(CONNECTION_STRING).then(dbInstance => {
    console.log("database is moving bruh")
    app.set('db', dbInstance);
});
app.use(session({
    secret:SESSION_SECRET,
    resave:false,
    saveUninitialized:false
    
}))

app.get('/api/view_listings', readListings)

const port = 5000

app.listen({port}, () => console.log(`gotchu on ${port}`))