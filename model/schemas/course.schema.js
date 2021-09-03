/** packges */
const mongoose = require("mongoose");


/** creacion del esquema */
const teacherSchema = new mongoose.Schema({
code: {
    type: "String",
    required : true,
   
},
name:{
    type: "String",
    required: true,
    
}
});
/** exportacion del esquema */
module.exports = teacherSchema;