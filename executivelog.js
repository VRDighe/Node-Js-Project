var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');
 
var connection = require('./../config');
module.exports.executiveauthenticate=function(req,res){
    var email=req.body.Email;
    var password=req.body.Password;

   
    connection.query('SELECT * FROM executive_info WHERE Email = ?',[email], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
       
          console.log(email);
          console.log(password);
          
        if(results.length > 0){
           decryptedString = cryptr.decrypt(results[0].Password);
            if(password==decryptedString){
             res.redirect('./../login3');
            }else{
                res.json({
                  status:false,
                  message:"Email and password does not match"
                 });
            }
          
        }
        else{
          res.json({
              status:false,    
            message:"Email does not exits"
          
          });
                
      }
      }
    });
}
