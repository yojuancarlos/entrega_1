/** packages */

const express = require("express");
const config = require("config");

/** app configuratio */
const app = express();
const port = config.get("server-port");
/** methods  */

app.get("/",(req, res, next) => {
    res.send(" welcome to academic rest api from index.");
});

app.get
app.listen(3001, () => {
   console.log("sever is running .....") 
});