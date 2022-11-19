const express = require('express')
const RouterUser=require("./routes/User.Route")

const db=require("./config/db")
const app = express()
app.use(express.json())
const port = 3000
app.use("/users",RouterUser)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})