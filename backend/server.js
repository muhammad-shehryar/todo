const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const todoRoutes = require("./routes/todoRoutes")


app.use(express.json());
app.use(cors());
app.use("/api",todoRoutes)

mongoose
  .connect("mongodb://localhost:27017/todolist", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongodb connected"))
  .catch((error) => console.log(error));

  app.get("/",(req,res)=>{
    res.send("Todo list api runiing")
  })



  const PORT = process.env.PORT || 5000;

  app.listen(PORT,()=>{
    console.log(`server is runnning on port ${PORT}`);
  })


