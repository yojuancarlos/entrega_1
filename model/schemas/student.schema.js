/** packges */
const mongoose = require("mongoose");


/** creacion del esquema */
const studentSchema = new mongoose.Schema({
code: {
    type: "String",
    required : true,
    
},
name: {
    type: "String",
    required : true,
},
lastname: {
    type: "Stringr",
    required : true,
  
},
email: {
    type: "String",
    required : true,
    
},
phone: {
    type: "String",
    required : true,
    
}

});
/** exportacion del esquema */
module.exports = studentSchema;