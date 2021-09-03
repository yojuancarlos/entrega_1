/** Dto */
const studentDto = require("../../model/dto/student.dto");
const userDto = require("../../model/dto/user.dto");
const config = require("config");
/**helper */

const helper = require("../helpers/general.helper");
const notHelper = require("../helpers/notification.helper");


exports.createStudent= (req, res, next)=>{
    console.log(req.body);
let std ={
    code: req.body.codee,
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    career: req.body.career
};
studentDto.create(std,(err,data)=>{
     if(err){
         studentDto.delete({_id: data_id}, (err, data)=>{
            console.log("deleteting due to not user cration..")
         });
         return res.status(400).json(
             {
                 error:err
             }
         );
     }
     let r = config.get("")
     let user={
        name: std.name,
        lastname: std.lastName,
        username:std.code,
        password: helper.EncrytPassword(req.body.password),
        role:r
     };
     userDto.create(user, (err,u) =>{
        if(err){
            return res.status(400).json(
                {
                    error:err
                }
            );
           
}
notHelper.sendSMS(std.phone);
res.status(201).json(
    {
        info : data
    }
);
     });
});
};
exports.updateStudent= (req, res, next)=>{
    let std ={
        code: req.body.codee,
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        career: req.body.career
    };
    studentDto.update({_id: req.body.id},std,(err,data)=>{
         if(err){
             return res.status(400).json(
                 {
                     error:err
                 }
             );
         }
        
    res.status(201).json(
        {
            info : data
        }
    );
         });
    };
    xports.getAll= (req, res, next)=>{
      
        studentDto.getAll({},(err,data)=>{
             if(err){
                 return res.status(400).json(
                     {
                         error:err
                      }
                );
             }
            
        res.status(200).json(
            {
                info : data
            }
        );
             });
        };
        xports.getByCode= (req, res, next)=>{
      
            studentDto.getByCode({code: req.params.code},(err,data)=>{
                 if(err){
                     return res.status(400).json(
                         {
                             error:err
                          }
                    );
                 }
                
            res.status(200).json(
                {
                    info : data
                }
            );
                 });
            };
        exports.deleteStudent =() => {
            studentDto.delete({_id: req.body.id},(err,data)=>{
                if(err){
                    return res.status(400).json(
                        {
                            error:err
                         }
                   );
                }
               
           res.status(204).json(
               {
                   info : data
               }
           );
                });


        }; 