/** packges */
const mongoose = require("mongoose");

const mongoose = require("mongoose");

/** creacion del esquema */
const vehiculoSchema = new mongoose.Schema({
provedor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref : "coll_provedor",
    required : true,
},
marca_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref : "coll_marca",
    required : true,
},
catagoria_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref : "coll_categoria",
    required : true,
},

color: {
    type: "string",
    required : true,
    
},
modelo :{
    type: "string",
    required: true,
    
},
serie_chasis :{
    type: "string",
    required: true,
    
},
serie_motor :{
    type: "string",
    required: true,
    
},
serie_precio :{
    type: "number",
    required: true,
    
},
serie_descuento :{
    type: "number",
    required: true,
    
},
serie_estado :{
    type: "string",
    required: true,
    
}


});
/** exportacion del esquema */
module.exports = periodSchema;