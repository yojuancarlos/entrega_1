/** packages */

const express = require("express");
const config = require("config");
const bodyparser = require("body-parser");

/** app configuratio */
const app = express();
const port = config.get("server-port");
const jsonparser = bodyparser.json();
const urlEncodedparser = bodyparser.urlencoded(
    {extended : true}
);
app.use(jsonparser);
app.use(urlEncodedparser);

const ipFn = require("./middleware/getlpAddreess");
app.use("*",ipFn);
/** methods  */
app.get("/",(req, res, next )=> {
res.send("welcome to academic rest api.");
});


app.get("/",(req, res, next) => {
    res.send(" welcome to academic rest api from app.");
});

app.get

const studentroutes = require("./routes/student.routes");
studentroutes(app);



app.listen(port, () => {
   console.log("sever is running .....") 
});