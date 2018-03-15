const path = require('path')
const publicPath = path.join(__dirname,'../public')
const express=require('express')
const app=express()
const port = process.env.port || 3000

console.log('hello')
console.log(publicPath)

app.use(express.static(publicPath))
app.listen(port,()=>{
    console.log('port 3000 is listining')
})