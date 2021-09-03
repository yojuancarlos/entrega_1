/** packagess */
const mongoose = require("mongoose");

const config = require("config");
const mongodbInfo = config.get("db-connections.mongodb");


const connSTR =`mongodb+srv://${mongodbInfo.user}:${mongodbInfo.password}@${mongodbInfo.host}${mongodbInfo.dbname}?retryWrites=true&w=majority`;

module.exports = () => {
    mongoose.connect(connSTR);
    mongoose.connetion.on("connected",()=>{
        console.log("mongodb server connected!");
    });
    mongoose.connect(connSTR);
    mongoose.connetion.on("disconnected",()=>{
        console.log("mongodb server disconnected!");
    });
    mongoose.connect(connSTR);
    mongoose.connetion.on("error",()=>{
        console.log("mongodb server error!");
    });
    mongoose.connect(connSTR);
    mongoose.connetion.on("SIGINT",()=>{
        mongoose.connection.close(() =>{
        console.log("mongodb server shutting down!");
        });
    });
};