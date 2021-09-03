/** packges */
const mongoose = require("mongoose");


/** creacion del esquema */
const userSchema = new mongoose.Schema({

name: {
    type: "String",
    required : true,
},
lastname: {
    type: "Stringr",
    required : true,
  
},
username: {
    type: "String",
    required : true,
    unique: true
    
},
password: {
    type: "String",
    required : true,
    
},
role:{
    type:"Number",
    required: true
}

});
/** exportacion del esquema */
module.exports = userSchema;