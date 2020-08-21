var Cryptr = require('cryptr');
var express=require("express");
var connection = require('./../config');
 cryptr = new Cryptr('myTotalySecretKey');
 
module.exports.executiveregister=function(req,res){
  var encryptedString = cryptr.encrypt(req.body.Password);
    var ngousers={
        "name":req.body.Name,
        "email":req.body.Email,
        "password":encryptedString,
        "location":req.body.Location,
        "contact":req.body.Contact
    }
    connection.query('INSERT INTO executive_info SET ?',ngousers, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
}