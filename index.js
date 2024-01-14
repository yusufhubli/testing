// import express from 'express'
// import path from 'path'
const express = require("express")
const path = require("path")

const app = express()

app.use(express.static(__dirname+'./views'))
app.use(express.static(__dirname+'./views/css'))
app.use(express.static(__dirname+'./views/js'))

app.get('/home',(req,res)=>{
    res.sendFile(path.resolve('./views/index.html'))
})
app.listen(5000,()=>console.log('listen at 5000'))