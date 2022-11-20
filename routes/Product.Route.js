const ProductController=require("../controllers/Product.Controller");
const express=require("express")
const Router=express.Router();


Router.post("/",ProductController.create)
Router.delete("/:id",ProductController.delete)
Router.put("/:id",ProductController.update)
Router.get("/",ProductController.read)
module.exports=Router;