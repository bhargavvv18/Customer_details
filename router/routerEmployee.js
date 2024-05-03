const express=require('express')

const router=express.Router()

const employeeController=require("../controllers/employeecontroller")

const Employee=require("../models/Employee")

router.post('/addemp',employeeController.createEmployee)

router.get('/allemp',employeeController.getEmployee)

router.get("/emp/:id",employeeController.singleEmployee)

router.patch("/update/:id",employeeController.updateEmployee)

router.delete("/delete/:id",employeeController.deleteEmployee)
module.exports=router   