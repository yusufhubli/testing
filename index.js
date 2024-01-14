 import express from 'express'
 import path from 'path'
// const exp = require("constants")
// const express = require("express")
// const path = require("path")
console.log(path.dirname('csstest/public'))
const app = express()
app.use(express.static('./public'))
app.use(express.static('./views'))
app.get('/',(req,res)=>{
    res.sendFile(path.resolve('./views/index.html'))
    res.sendFile(path.resolve('./css/index.css'))
})
app.listen(5000,()=>console.log('listen at 5000'))