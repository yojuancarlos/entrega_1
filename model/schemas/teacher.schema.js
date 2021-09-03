/** packges */
const mongoose = require("mongoose");
const teacherSchema = require("./course.schema");
const validator = require("mongoose-unique-validator");

/** creacion del esquema */
const periodSchema = new mongoose.Schema({
document: {
    type: "String",
    required : true,
   unique: true
},
name: {
    type: "String",
    required: true
},
lasrname: {
    type: "String",
    required : true,
   
},

email:{
    type: "String",
    required: true,
    unique:true
},
phone: {
    type: "String",
    required : true,
  
},
office: {
    type: "String",
    required : true,
   
},
department: {
    type: "String",
    required : true,
   
}
});
/** exportacion del esquema */
teacherSchema.plugin(validator);
module.exports = periodSchema;