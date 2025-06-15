const express=require('express')
const dotenv=require('dotenv')
dotenv.config()
const aiRoutes=require('./routes/ai.routes')

const app=express()

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/ai', aiRoutes)

module.exports=app