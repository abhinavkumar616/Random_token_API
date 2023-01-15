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
        type:Number,
        minLength:[6,"pincode should be 6 digit"],
        maxLength:[6,'pincode not be more than 6 digit']
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