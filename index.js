const express = require('express')
const RouterUser=require("./routes/User.Route")
const RouterProduct=require("./routes/Product.Route")
const RouterCategory=require("./routes/Category.Route")
const RouterSubgategory=require("./routes/SubCategory.Route")
const RouterCustomer=require("./routes/Customer.Route")
const RouterGallery=require("./routes/Gallery.Route")
const RouterProvider=require("./routes/Provider.Route")
const RouterDelivery=require("./routes/Delivery.Route")
const RouterOrder=require("./routes/Order.Route")






const db=require("./config/db")
const app = express()
app.use(express.json())
const port = 3000
app.use("/users",RouterUser)
app.use("/orders",RouterOrder)
app.use("/categories",RouterCategory)
app.use("/customers",RouterCustomer)
app.use("/subcategories",RouterSubgategory)
app.use("/delivery",RouterDelivery)
app.use("/galleries",RouterGallery)
app.use("/providers",RouterProvider)
app.use("/products",RouterProduct)












app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})