require("dotenv").config;
const express = require('express');
const app = express(); // with the help of it we can use express property method
const PORT = process.env.PORT || 5000;
const products = require("./products.json")

const connectDB = require('./db/conn')

const products_routes = require("./routes/products")

app.get("/hii",(req,res)=>{
    res.send("hi i am live");
});

app.get("/", (req,res) =>{
  res.json({products})
})

//middleware to set router.

app.use("/api/products",products_routes);


const start = async () => {
try{
    await connectDB();
app.listen(PORT,() => {
 console.log(`${PORT} Yes I am connected`);
})
}catch (error) {
  console.log(error);
}
}

start();