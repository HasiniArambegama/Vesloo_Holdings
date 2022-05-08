const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dstockSchema = new Schema({
    ItemCode : {
        type : String,
        required : true
    },
    Description : {
        type : String,
        required : true
    },
    Price :{
        type : String,
        required : true
    },
    Month :{
        type : String,
        required : true
    }
    
})

const DStock = mongoose.model("DStock", dstockSchema);
module.exports = DStock;