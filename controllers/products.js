const getAllProducts = async (req,res) => {
   
    res.status(200).json({msg:"i get all products"});
};

const getAllProductsTesting = async(req,res) => {
    res.status(200).json({msg:"i am get all product testing"})
};

// AIEnsTWE4fVQ5PAY
//mongodb+srv://soumya9589:<password>@cluster0.fux0ydm.mongodb.net/?retryWrites=true&w=majority
module.exports = {getAllProducts, getAllProductsTesting};