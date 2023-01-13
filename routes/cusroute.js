const express=require("express")

const router=express.Router()

const common=require("../controller/cuscontroller")
// const customerFetch =require("../controller/cuscontroller")

// router.post("/register",AuthController.register)
router.post("/customerInsert",common.customerInsert)    
router.get("/customerFetch",common.customerFetch)
router.get("/customerFetchByID/:_id",common.customerFetchByID)
router.put("/customerUpdate/:_id",common.customerUpdate)
router.delete("/customerDelete/:_id",common.customerDelete)

module.exports=router