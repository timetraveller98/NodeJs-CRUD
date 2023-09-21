import mongoose from 'mongoose';
const userSchema =new mongoose.Schema({
    name:String,
    contact:Number,
    email:String
});
module.exports = mongoose.model('details', userSchema)
