const mongoose=require("mongoose")

async function getData(){
    try{
        // await mongoose.connect("mongodb+srv://abhinav0011:welcome0011@cluster0.dprrrwl.mongodb.net/customerDetails")
        await mongoose.connect("mongodb://localhost:27017/customerDetails")
        console.log("Database is connected.....");
    }
    catch(error){
        console.log("Something Wrong while Connecting database!!!!!!");
    }
}

getData()