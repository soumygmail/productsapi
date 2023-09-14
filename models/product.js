const mongoose = require('mongoose');


const ProductSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    price:{
        type:Number,
        required:true
    },
    featured:{
        type:Boolean,
        default:false
    },
   
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
      type:String,
      enum:{
        values:["apple", "samsung", "mi"],
        message: `{VALUE} is not supported`,
      },
    },
});


// collection 

module.exports = mongoose.model('Product', ProductSchema);