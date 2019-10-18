const express = require('express')
const app = express();
const massive = require('massive')

app.use(express.json())
const port = 4000



app.listen({port}, () => console.log(`app hears you out on ${port}`) )