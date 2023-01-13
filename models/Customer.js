const mongoose=require("mongoose")

const CustomerSchema=new mongoose.Schema({

    email:{
        type:String
        // unique:true
        // required:[true,"Customer_email Must required"]
    },   

    mob:{
        type:Number
        // unique:true
        // required:[true,"C_mobile Must required"]
    },

    address:{
        type:String
        // required:[true,"Address Must required"]
    },

    pincode:{
        type:Number
        // required:[true,"Pincode Must required"]
    },

    cName:{
        type:String
        // required:[true,"C_Name Must required"]
    },

    device:{
        type:String
        // required:[true,"device Must required"]
    }

})

const Customer=new mongoose.model("Customer",CustomerSchema)
module.exports=Customer