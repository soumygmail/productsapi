const connectDB = require("./db/conn");
const Product = require('./models/product');

const ProductJson = require('./products.json');



const start = async () => {
    try{
    await connectDB();
    await Product.create(ProductJson);
    console.log('success');
    }
    catch (error) {
        console.log(error) ;
    }
}
start();