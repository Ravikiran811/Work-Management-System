//mongoose works middleware of user and the database
const mongoose = require('mongoose');
//if user wants to store some data first needs to define schemas/fields
//based on the fields data will be stored in the database
const listSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type : Date,
        required:true
    },
    color:{
        type:String,
        required:true
    }
})
//this line will place the schemas in the database
const Lists = mongoose.model('DailyList',listSchema);
module.exports = Lists;