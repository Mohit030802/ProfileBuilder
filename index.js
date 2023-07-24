const express = require("express");
const server = express();
const PORT = 3000;
const profileController = require("./Controller/profile");
const Router = require("./routes/profile");
const morgan = require("morgan");
// DB connection
const cors =require('cors')
const mongoose = require("mongoose");
const { Schema } = mongoose;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://om030802:om030802@cluster0.jk4shhj.mongodb.net/?retryWrites=true&w=majority",
    console.log("Database connected")
  );
}


// Body Parser
server.use(cors());
server.use(express.json());
server.use(morgan("tiny"));
server.use(express.static("build"));
server.use((req, res, next) => {
  console.log(req.method, req.ip, req.hostname, new Date());
  next();
});
server.use("/profiles", Router.profileRouter);
server.use("*",(req,res)=>{
  res.sendFile(__dirname+'/build/index.html')
})

server.listen(PORT, () => {
  console.log(`server listening at ${PORT}`);
});
