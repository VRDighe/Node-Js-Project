var express=require("express");
var bodyParser=require('body-parser');
 
var connection = require('./config');
var app = express();
 
var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');
var ngoregister=require('./controllers/ngo');
var ngologin=require('./controllers/ngolog');
var exeregister=require('./controllers/executivereg');
var exelogin=require('./controllers/executivelog');
var adminlogin=require('./controllers/adminlog')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "starting page.html" );    
}) ;

app.use(express.static('public'));
app.get('/login1', function (req, res) {  
   res.sendFile( __dirname + "/" + "login1.html" );    
}) ;
app.get('/login4', function (req, res) {  
   res.sendFile( __dirname + "/" + "login4.html" );    
}) ;
app.get('/login3', function (req, res) {  
   res.sendFile( __dirname + "/" + "login3.html" );    
}) ;
// 
//app.get('/next.html', function (req, res) {  
//   res.sendFile( __dirname + "/" + "next.html" );  
//     res.sendFile( __dirname + "/" + "next.css" );  
//})  ;
 
/* route to handle login and registration */
app.post('/api/register',registerController.register);
app.post('/api/ngoreg',ngoregister.ngoreg);
app.post('/api/ngoauthenticate',ngologin.ngoauthenticate);
app.post('/api/adminauthenticate',adminlogin.adminauthenticate);
app.post('/api/executiveregister',exeregister.executiveregister);
app.post('/api/executiveauthenticate',exelogin.executiveauthenticate);
app.post('/api/authenticate',authenticateController.authenticate);
 
console.log(authenticateController);
app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/ngo',ngoregister.ngoreg);
app.post('/controllers/ngolog',ngologin.ngoauthenticate);
app.post('/controllers/adminlog',adminlogin.adminauthenticate);
app.post('/controllers/executivereg',exeregister.executiveregister);
app.post('/controllers/executivelog',exelogin.executiveauthenticate);
app.post('/controllers/authenticate-controller', authenticateController.authenticate);

app.listen(1337);
