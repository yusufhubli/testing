import express from 'express'
import path from 'path'

const app = express()

app.use(express.static('./views'))
app.use(express.static('./views/css'))
app.use(express.static('./views/js'))

app.get('/home',(req,res)=>{
    res.sendFile(path.resolve('./views/index.html'))
})
app.listen(5000,()=>console.log('listen at 5000'))