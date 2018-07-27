var express =require('express');
var bodyParser =require('body-parser');
var nodemailer =require('nodemailer');
var path =require('path');
var ejs = require('ejs');
var hbs =require('handlebars');
var cons = require('consolidate');
var val =require('validator');

var app = express();

// View engine setup
//app.engine('html', cons.hbs);
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', 'app');

//Static folder

app.use(express.static(path.join(__dirname, '/app')));

//Body Parser Middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.post('/', function(req, res){
	
	var output= `
	<p>You have a new contact</p>
	<h3>Contact details</h3>
	<ul>
		<li>Name:${req.body.yourName}</li>
		<li>Email:${req.body.yourEmail}</li>
	</ul>
	<h3>Message</h3>
	<p>${req.body.yourMsge}</p>
	`;
	
	//Create reusable transporter object using the default SMTP transport

var transporter = nodemailer.createTransport('SMTP',{
    service: '',

	 auth: {
      user: '',
      pass: ''
    },
		tls:{
		rejectUnauthorized:false
	}
  });
 
	//Setup email data with unicode symbols
  var mailOptions = {
	from: '',
    to: '',
    subject: 'New message from contact form',
	html:output
  };
  
  //Send mail with defined transport object
  transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
     
	 return console.log(error);
    }  
	  console.log('Email sent: ', response.messageId);
    res.render('index',{msg:'document.querySelector(".modal-2").classList.add("modal--is-visible");'});
	
  });
});

//app.listen(process.env.PORT);
app.listen(3000, function(){console.log('Server started..');});
