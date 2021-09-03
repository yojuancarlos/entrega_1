/** packges */
const mongoose = require("mongoose");


/** creacion del esquema */
const studentgroupSchema = new mongoose.Schema({
student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref : "coll_student",
    required : true,
},
group_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref : "coll_group",
    required : true,
}
});
/** exportacion del esquema */
module.exports = studentgroupSchema;