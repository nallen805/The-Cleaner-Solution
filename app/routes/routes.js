//Routing for The Cleaner Solution

//Required modules
var express = require('express');
var router = express.Router();
var dbmodule = require('../public/javascripts/dbmodule.js');    //Custom module
var path = require('path');

//Home page
router.get('/', function(request, response)
{
    console.log('Request for home page received.');
    response.render('home', {title:'The Cleaner Solution', message:'The Cleaner Solution'});
});

//Services page (request for business services)
router.get('/services', function(request, response)
{
    console.log('Request for services page received.');
    //response.render('services', {title:'Services'});
    ///dbmodule.displayBusServices(response);
    //dbmodule.displayResServices(response);
    dbmodule.displayServices(response);
});

//Request quote page
router.get('/quote', function(request, response)
{
    console.log('Request for quote page received.');
    dbmodule.displayStandardPackages(response);
});

//Saving standard requests
router.post('/savingStandardRequest', function(request, response)
{
    console.log('Standard request saved.');
    var stdName = request.body.stdName;
    var stdEmail = request.body.stdEmail;
    var stdPhone = request.body.stdPhone;
    var stdSelectedPkg = request.body.pkg;
    var stdSelectedFreq = request.body.freq;
    var stdSelectedPrice = request.body.price;
    dbmodule.saveStdRequest(stdName, stdEmail, stdPhone, stdSelectedPkg, stdSelectedFreq, stdSelectedPrice, response);
});

//Saved standard request
router.get('/savedStandardReq', function(request, response)
{
    console.log('Request for saving standard request received');
    response.render('savedStandardReq', {title:'Success', message:'Save Standard Request'});
});

//View all standard requests
router.get('/viewStandardRequests', function(request, response)
{
    console.log('Request to view all standard requests received');
    dbmodule.viewStandardRequests(response);
});

//Saved custom requests
router.post('/savedCustomRequest', function(request, response)
{
    console.log('Request to save all custom requests received.');
    var name=request.body.name;
    var email=request.body.email;
    var phone=request.body.phone;
    dbmodule.saveCustomRequest(name, email, phone, response);
});

//View all custom requests
router.get('/viewCustomRequests', function(request, response)
{
    console.log('Request to view all custom requests received.');
    dbmodule.viewCustomRequests(response);
});

//Admin user login 
router.get('/adminLogin', function(request, response)
{
    console.log('Admin login page request received');
    response.render('adminLogin', {title:'Admin Login', message:'Admin Login'});
});

//Back to admin success page
router.get('/adminSuccess', function(request, response)
{
    console.log('Request for admin success page requested');
    response.render('adminSuccess', {title:'Welcome Admin', message:'Welcome Admin'});
});

//Verify admin user
router.post('/adminSuccess', function(request, response)
{
    console.log('Admin success page requested');
    var name=request.body.name;
    var password=request.body.password;
    dbmodule.verifyAdmin(name, password, response);
});

//Display testimonials
router.get('/feedback', function(request, response)
{
    console.log('Request for feedback received');
    dbmodule.showFeedback(response);
});

//Registration form
router.get('/register', function(request, response)
{
    console.log('Registration form requested');
    response.render('register', {title:'Register', message:'Register'});
});

//Save registered users 
router.post('/savingRegisteredUsers', function(request, response)
{
    console.log('Saving registered users');
    var regFName = request.body.regFName;
    var regLName = request.body.regLName;
    var regEmail = request.body.regEmail;
    var regPhone = request.body.regPhone;
    var regUsername = request.body.regUsername;
    var password = request.body.password;
    var selectedChoice = request.body.chooseRegistration;
    dbmodule.saveNewUsers(regFName, regLName, regEmail, regPhone, regUsername, password, selectedChoice, response);
});

//Display registered users
router.get('/viewRegisteredUsers', function(request, response)
{
    console.log('Viewing all registered users');
    dbmodule.displayRegisteredUsers(response);
});

//Login page
router.get('/login', function(request, response)
{
    console.log('Request for login page received');
    response.render('login', {title:'Login', message:'Login'});
});

//Login success
router.post('/loginSuccess', function(request, response)
{
    console.log('Successful login for registered users');
    var username = request.body.username;
    var password = request.body.password;
    dbmodule.verifyUser(username, password, response);
});

//Gallery page
router.get('/Gallery', function(request, response)
{
    console.log('Gallery page request received');
    response.render('gallery', {title:'Gallery', message:'Gallery'});
});

//Leave feedback
router.get('/leaveFeedback', function(request, response)
{
    console.log('Request to leave feedback received');
    response.render('leaveFeedback', {title:'Leave Feedback', message:'Leave Feedback'});
});

router.post('/savingFeedback', function(request, response)
{
    //console.log('Saving feedback/testimonial');
    var custName=request.body.custName;
    var testimonial=request.body.testimonial;
    dbmodule.saveFeedback(custName, testimonial, response);
});

module.exports = router;