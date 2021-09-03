/** packages */
const mongoose = require("mongoose");

/** using shema */
const schema = require("../schemas/course.schema");

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
const dto = mongoose.model("coll_course",schema);
module.exports = dto;