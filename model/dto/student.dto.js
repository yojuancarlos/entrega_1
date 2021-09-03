/** packages */
const mongoose = require("mongoose");
const db = require("../db-connection/mongodb")

/** using shema */
const schema = require("../schemas/student.schema");
const { db } = require("./user.dto");
db();
schema.static ={
create: function(data, cb){
    let doc = new this(data);
    doc.save(cb);
},

getAll: function(query, cb){
    
    doc.find(query, cb);
},

getByCode: function(query, cb){
    
    doc.find(query, cb);
},
update:function (query, data, cb){
    this.findOneAndUpdate(query,{set: data},{new: true}, cb);
},
delete : function(query, cb){
    this.findOneAndDelete(query);
}
};
const dto = mongoose.model("coll_student",schema);
module.exports = dto;