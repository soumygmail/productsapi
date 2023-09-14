const mongoose = require('mongoose');

uri="mongodb+srv://soumya9589:4cWh4chBPwm3paay@cluster0.iushbmb.mongodb.net/?retryWrites=true&w=majority"

// uri = "mongodb+srv://soumya9589:AIEnsTWE4fVQ5PAY@cluster0.fux0ydm.mongodb.net/newrestapi?retryWrites=true&w=majority"
const connectDB = () => {
    console.log("connect db"); 
    return mongoose.connect(uri)
     
    };// 4cWh4chBPwm3paay
   // console.log("connect db");
      // userNewUrlParser: true,
      // useUnifiedTopology: true,

    



module.exports = connectDB;