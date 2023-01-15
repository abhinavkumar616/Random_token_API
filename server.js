const express=require("express")
require("./dbConnect")
const Cusroute=require("./routes/cusroute")

const app=express()
app.use(express.json())



app.use("/api",Cusroute)

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})