var express =require('express');
var bodyParser =require('body-parser');
var nodemailer =require('nodemailer');
var path =require('path');
var ejs = require('ejs');
var hbs =require('handlebars');
var cons = require('consolidate');

var app = express();

// View engine setup
//app.engine('html', cons.hbs);
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', 'docs');

//Static folder

app.use(express.static(path.join(__dirname, '/docs')));

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
<<<<<<< HEAD
    service: 'Mail.ru',
=======
    service: '',
>>>>>>> 07c8c94dfea738b13360a780b313ae5a71db275a

	port: 465,
    secure: true,
	
	 auth: {
<<<<<<< HEAD
      user: 'mail-19-mail@mail.ru',
      pass: 'start/90/**'
   },

=======
      user: '',
      pass: ''
    },
		tls:{
		rejectUnauthorized:false
	}
>>>>>>> 07c8c94dfea738b13360a780b313ae5a71db275a
  });
 
	//Setup email data with unicode symbols
  var mailOptions = {
<<<<<<< HEAD
	from: 'mail-19-mail@mail.ru',
    to: '3www-mail@mail.ru',
=======
	from: '',
    to: '',
>>>>>>> 07c8c94dfea738b13360a780b313ae5a71db275a
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
const port =process.env.PORT || 3000;

<<<<<<< HEAD
// app.listen(process.env.PORT);
app.listen(port, function(){console.log(`Server started on port ${port}`);});
=======
//app.listen(process.env.PORT);
app.listen(3000, function(){console.log('Server started..');});
>>>>>>> 07c8c94dfea738b13360a780b313ae5a71db275a
