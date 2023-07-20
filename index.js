const express = require("express");
const server = express();
const PORT = 3000;
const profileController = require("./Controller/profile");
const Router = require('./routes/profile');
const morgan = require("morgan");

// Body Parser
server.use(express.json());
server.use(morgan('tiny'))
server.use(express.static("public"));
server.use((req, res, next) => {
  console.log(req.method, req.ip, req.hostname, new Date());
  next();
});
server.use("/profiles", Router.profileRouter);


server.listen(PORT, () => {
  console.log(`server listening at ${PORT}`);
});
