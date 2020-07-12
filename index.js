const express=require('express')
const app=express()
const port=3065

const configureSH=require('./config/database')
configureSH()

app.use(express.json())
const routes=require('./config/routes')

const useragent=require('express-useragent')
app.use(useragent.express())
app.use('/',routes)

app.listen(port,()=>{
    console.log('listening to port',port)
})