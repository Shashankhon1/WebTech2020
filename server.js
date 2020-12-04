import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
 
// app config

const app = express()
const port = process.env.PORT || 9000



//middleware
app.use(express.json());


// DB config
const connection_url = 'mongodb+srv://Malligator:VAAX04tJWyqBG64W@cluster0.zbcwp.mongodb.net/woofdb?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
useCreateIndex: true,
useNewUrlParser: true,
useUnifiedTopology: true

})

// api route
app.get('/',(req,res)=>res.status(200).send("hello"))


app.get('/messages/sync', (req,res)=>{
    

    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        } else{
            res.status(200).send(`new message created: \n ${data}`)
        }
    })
})


app.post('/messages/new', (req,res)=>{
    const dbMessage=req.body

    Messages.create(dbMessage,(err,data)=>{
        if(err){
            res.status(500).send(err)
        } else{
            res.status(201).send(`new message created: \n ${data}`)
        }
    })
})


//listen
app.listen(port, ()=>console.log(`Listening on localhost:${port}`));

