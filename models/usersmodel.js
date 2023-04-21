const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true,"name is mandatory"],
    },
    password:{
        type:String,
        required: [true,"password is mandatory"]
    }
})

module.exports = mongoose.model('users',userSchema);