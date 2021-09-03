const controller = require ("./controller/logic/student.controller");

module.exports= (app)=>{

    console.log("loading routes of student")
    app.get("/student/bycode/:code",(req, res, next )=>{
        console.log("getting student by code");
        controller.getAll (req, res, next); 
        });
        
        app.post("/student",(req, res, next )=>{
            controller.createstudent (req, res, next); 
            });
        app.put("/student",(req, res, next )=>{
            controller.updatestudent (req, res, next); 
            });
        app.delete("/student",(req, res, next )=>{
            controller.deletestudent (req, res, next); 
            });
};