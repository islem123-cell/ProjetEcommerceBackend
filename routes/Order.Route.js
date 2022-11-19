const UserController=require("../controllers/Order.Controller");
const express=require("express")
const Router=express.Router();
Router.post("/",UserController.create)
Router.delete("/:id",UserController.delete)
Router.put("/:id",UserController.update)
Router.get("/",UserController.read)
module.exports=Router;