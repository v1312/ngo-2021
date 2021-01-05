const express = require('express')
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
var cors = require('cors')
app.use(cors())


app.use(express.static(path.join(__dirname,"ngo-project")))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(process.cwd()+"/ngo-project/dist/ngo-project/"));



app.get('/',(req,res) => {
    res.sendFile(process.cwd()+"/ngo-project/dist/ngo-project/index.html");
})

// app.use(express.static(path.join(__dirname,"templates")))


// /* START - DATABASE */
 const mongoose = require('mongoose');
//const { stringify } = require('querystring');

 mongoose.connect('mongodb://localhost:27017/ngo',{ 
    useNewUrlParser: true ,
    useUnifiedTopology:true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
     .then(()=>{console.log('You are now connected to the database!')})
     .catch((err) => console.log(err))


     const UserSchema = new mongoose.Schema(
        {
            
            firstName: String,
            lastName: String,
            email: String,
            password:String,
            role:String
        }
    )

    const DonationTypeSchema = new mongoose.Schema(
        {donationType:String}
    )
    
    const DonationSchema = new mongoose.Schema(
        {
            donationType:{},
            firstName: String,
            lastName: String,
            email: String,
            phoneNumber:Number,
            contactDetails:{addressOne:String,
                addressTwo:String,
                city:String,
                state:String,
                postalCode:String,
                country:String,
            },
            date:Date,
            amount:Number
            
        }
    )



    DonationType = mongoose.model('donationType',DonationTypeSchema)
    UserData = mongoose.model('users',UserSchema)
    Donation = mongoose.model('donation',DonationSchema)
    Checkout = mongoose.model('donation',DonationSchema)


//User Data


     app.get("/api/ngo/users",(req,res,next) => {
       UserData.find(function(err,users){
           if(err) return next(users);
           res.json(users)
       });
    })


    app.post("/api/ngo/users",(req,res,next) => {
        let new_object;
        if(req.body!==undefined){
            new_object = req.body;
            UserData.create(new_object,function(err,object) {
                if(err) return next(err);
                res.json(object)
            })
        }
    })

    /* GET ONE */
app.get("/api/ngo/users/:_id",(req,res,next) => {
    let _id = req.params._id
    UserData.findById(_id,function(err,data){
        if(err) return next(err);
        res.json(data)
    })
})

/* REMOVE ONE */
app.delete("/api/ngo/users/:_id",(req,res,next) => {
    let _id = req.params._id
    UserData.findByIdAndRemove(_id,function(err,data){
        if(err) return next(err);
        res.json(data)
    })
})

/* UPDATE */
app.put("/api/ngo/users/:_id",(req,res,next) => {
    let updated_object = req.body;
    let _id = req.params._id
    UserData.findByIdAndUpdate(_id,updated_object,{new: true},function(err,object){
        if(err) return next(err);
        res.json(object)
    })
})

//End User Data


//Donation Type

app.get("/api/ngo/donationType",(req,res,next) => {
    DonationType.find(function(err,users){
        if(err) return next(users);
        res.json(users)
    });
 })

 app.get("/api/ngo/donationType/:_id",(req,res,next) => {
    let _id = req.params._id
    DonationType.findById(_id,function(err,data){
        if(err) return next(err);
        res.json(data)
    })
})
 app.post("/api/ngo/donationType",(req,res,next) => {
     let new_object;
     if(req.body!==undefined){
         new_object = req.body;
         DonationType.create(new_object,function(err,object) {
             if(err) return next(err);
             res.json(object)
         })
     }
 })

 app.delete("/api/ngo/donationType/:_id",(req,res,next) => {
    let _id = req.params._id
    DonationType.findByIdAndRemove(_id,function(err,data){
        if(err) return next(err);
        res.json(data)
    })
})
//End Dontaion Type

//Start Donation List
app.get("/api/ngo/donation",(req,res,next) => {
    Donation.find(function(err,users){
        if(err) return next(users);
        res.json(users)
    });
 })

 app.get("/api/ngo/donation/:_id",(req,res,next) => {
    let _id = req.params._id
    Donation.findById(_id,function(err,data){
        if(err) return next(err);
        res.json(data)
    })
})


 app.post("/api/ngo/donation",(req,res,next) => {
     let new_object;
     if(req.body!==undefined){
         new_object = req.body;
         Donation.create(new_object,function(err,object) {
             if(err) return next(err);
             res.json(object)
         })
     }
 })

 app.delete("/api/ngo/donation/:_id",(req,res,next) => {
    let _id = req.params._id
    Donation.findByIdAndRemove(_id,function(err,data){
        if(err) return next(err);
        res.json(data)
    })
})

/* UPDATE */
app.put("/api/ngo/donation/:_id",(req,res,next) => {
    let updated_object = req.body;
    let _id = req.params._id
    UserData.findByIdAndUpdate(_id,updated_object,{new: true},function(err,object){
        if(err) return next(err);
        res.json(object)
    })
})

//End Donation List
//CheckOut

app.get("/api/ngo/donation",(req,res,next) => {
    Donation.find(function(err,checkOutDetails){
        if(err) return next(checkOutDetails);
        res.json(checkOutDetails)
    });
 })


app.post("/api/ngo/check-out",(req,res,next) => {
    let new_object;
    if(req.body!==undefined){
        for(i=0;i<req.body.length;i++){
            new_object = req.body[i];
            console.log(new_object)
            console.log(new_object.email)
            sendMail(new_object, info => {
                console.log(new_object);
                res.send(info);
              });    
    
        }
        
        Donation.create(new_object,function(err,object) {
            if(err) return next(err);
            res.json(object)

        })

    }
})

async function sendMail(new_object, callback) {

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: '',
        pass: ''
      }
    });
    
    var mailOptions = {
      from: '',// user email Id
      to: new_object.email,
      subject: 'Your Order Summary',
      html: '<p>Hi'+' ' +new_object.firstName+' '+new_object.lastName+',  '+'</p><br><br>' +
           '<h3 style="text-align:center;">Thank you for your Donation</h3><br><p >You have helped us continue our mission in a meaningful way.</p><br>'+
           '<div>'+
           '<h4>Transaction Summary</h4>'+
           '<table><tr><td>Transaction Date:</td><td></td><td>'+ new_object.date+'</td></tr><tr><td>Donation Type:</td><td></td><td>'+ new_object.donationType+'</td></tr><tr><td>Amount:</td><td></td><td>$'+ new_object.amount  +'</td></tr></table>'+
           '</div><br><br><br>'+
            '<p>Sincerely,<br>NGO</p>'
    };
    
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    })
    }

//End CheckOut





/* START - LogIn */
const jwt = require('jsonwebtoken');
const e = require('express');
var userID = 1;
app.post('/api/ngo/user/login',async(req,res) => {
    var email = req.body.email
    var password= req.body.password
    var role=req.body.role
    console.log(email,password,role)
    
        const user = await UserData.findOne({ email } )
        console.log(user)
    
        if(user==null || user == undefined || user.email == undefined) {
            res.status(401).send('No user found')
        }
        if(user.email=== email && user.password===password){
            if(user.role==="admin"){
                let rOle=user.role
                let email=user.email
                let payload = {subject: userID}
                let token = jwt.sign(payload,'secretKey')
                let result = {token,user}
                res.status(200).send({result,rOle})
                console.log('Admin login successfuly')
            }else{
                let rOle=user.role
                let email=user.email
                let _payload = {subject: userID}
                let _token = jwt.sign(_payload,'secretKey')
                let _result = {_token,user,rOle}
                res.status(200).send({_result})
                console.log(_token,rOle,user)
                console.log('User login successfuly')
            
            }
            }
            
            
         else {
            res.status(400).send({"msg":"Login Failed"})
        }

    })
    

function verifyToken(req,res,next) {
    if(!req.headers.authorization) {
        return res.status(400).send('Unauthorized request');
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token == 'null'){
        
        return res.status(400).send('Unauthorized request');
        
    }
    let payload = jwt.verify(token,'secretKey')
    if(!payload) {
        return res.status(400).send('Unauthorized request');
    }
    req.userId = payload.subject
    next()
}
function _verifyToken(req,res,next) {
    if(!req.headers.authorization) {
        return res.status(400).send('Unauthorized request');
    }
    let _token = req.headers.authorization.split(' ')[1]
    if(_token == 'null'){
        
        return res.status(400).send('Unauthorized request');
        
    }
    let _payload = jwt.verify(token,'secretKey')
    if(!_payload) {
        return res.status(400).send('Unauthorized request');
    }
    req.userId = _payload.subject
    next()
}
/* END -LogIn */




app.listen(3000,() => {
    console.log("Server is running at port: 3000")
})
