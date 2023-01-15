// const Customer=require("../models/Customer")
const Customer = require("../models/Customer")

const customerInsert = async (req, res) => {

    try {
        const { email, mob, address, pincode, cName, device } = req.body


        // Email Validation Code
        const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
        const isValidEmail = emailRegex.test(email);

        if (isValidEmail === false) {
            throw new Error("Please write correct email id")
        }

        console.log(isValidEmail);

        const data = await Customer.findOne({ email })
        // console.log("data",data)
        if (!data) {
            const mobile = await Customer.findOne({ mob })
            if (!mobile) {
                const Customers = await Customer.create({ email, mob, address, pincode, cName, device })
                console.log(Customers.cName);
                if (Customers.device == "MV4") {
                    console.log("Customer", Customers.device);
                    await Customers.save()
                }
                else if (Customers.device == "MV2") {
                    console.log("Customer", Customers.device);
                    await Customers.save()
                }
                else if (Customers.device == "MV6") {
                    console.log("Customer", Customers.device);
                    await Customers.save()
                }
                else if (Customers.device == "MV10") {
                    console.log("Customer", Customers.device);
                    await Customers.save()
                }
                else {
                    res.status(400).send("Please choose correct device")
                    return
                }
                let name = Customers.cName
                console.log(name);
                var nameThree = (name.substring(0, 3)).toUpperCase();
                console.log(nameThree);

                let randumNumber = Math.floor(Math.random() * (999 - 100 + 1) + 100);
                // console.log(randumNumber)

                let coupon = nameThree + Customers.device + randumNumber
                res.status(201).json({ status: "success", data: Customers, coupon: coupon })

            } else {
                res.send("mobile number already exists")
            }

        } else {
            res.send("email already exists")
        }

        // }
        // }
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error", err: error.message })
    }

}

const customerFetch = async (req, res) => {
    try {
        var data = await Customer.find()
        res.send({ result: "Done", data: data })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
}

const customerFetchByID = async (req, res) => {
    try {
        var data = await Customer.findOne({ _id: req.params._id })
        if (data) {
            res.send({ result: "Done", data: data })
        }
        else {
            res.status(404).send({ result: "Fail", message: "Invalid ID" })
        }
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
}


const customerUpdate = async (req, res) => {
    try {
        var data = await Customer.findOne({ _id: req.params._id })
        if (data) {
            data.email = req.body.email
            data.mob = req.body.mob
            data.address = req.body.address
            data.pincode = req.body.pincode
            data.cName = req.body.cName

            await data.save()
            res.send({ result: "Done", message: "Data Updated Successfully" })
        }
        else {
            res.status(404).send({ result: "Fail", message: "Invalid ID" })
        }
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
}


const customerDelete = async (req, res) => {
    try {
        var data = await Customer.findOne({ _id: req.params._id })
        if (data) {
            await data.delete()
            res.send({ result: "Done", message: "Data Deleted Successfully" })
        }
        else {
            res.status(404).send({ result: "Fail", message: "Invalid ID" })
        }
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
}


module.exports = {
    customerInsert, customerFetch, customerFetchByID, customerUpdate, customerDelete
}
