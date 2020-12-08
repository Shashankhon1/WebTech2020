import mongoose from 'mongoose'

const woofSchema=mongoose.Schema({
    message: String,
    name: String,
    timestamp:String,
    received: Boolean,
    chatroom: String


});

export default mongoose.model('messagecontents', woofSchema)