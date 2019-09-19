var mongojs = require('mongojs');
var databaseURL = "localhost/thecleaner";
var db = mongojs(databaseURL);
var message=null;

//Display all services
exports.displayServices=function(res)
{    
    db.services.find({}, function(err, displayServices)
    {
        if(err || !displayServices)
        {
            console.log(err);
            res.render('error', {message:"Error"});
        }
        else
        {   res.render('services', {serv:displayServices, title:'View Services', message:'Services'});    }
    });
};

//Display standard packages
exports.displayStandardPackages=function(res)
{
    db.standardPackages.find({}, function(error, displayStdPkg)
    {
        if(error || !displayStdPkg)
        {
            console.log("Error");
            res.render('error', {message:error});
        }
        else
        {
            res.render('requestQuote', {stdService:displayStdPkg, title:'Quote', message:'Request Quote'});
        }
    });
}

//Save standard requests
exports.saveStdRequest=function(stdName, stdEmail, stdPhone, stdSelectedPkg, stdSelectedFreq, stdSelectedPrice, response)
{
    db.StandardRequests.save({"name":stdName, "email":stdEmail, "stdPhone":stdPhone, "stdSelectedPkg":stdSelectedPkg, "stdSelectedFreq":stdSelectedFreq, "stdSelectedPrice":stdSelectedPrice}, function(error, saved)
    {
        if(error || !saved)
        {   response.render('error', {title:'Error'});  }
        else
        {   response.render('savingStandardRequest', {title:'Saving Standard Request', message:'Standard Request Saved'});  }
    });
}

//View all standard requests (admin)
exports.viewStandardRequests=function(response)
{
    db.StandardRequests.find({}, function(error, standardRequests)
    {
        if(error || !standardRequests)
        {   response.render('error', {title:'Error', message:error});   }
        else
        {  response.render('viewStandardRequests', {stdReq:standardRequests, title:'Standard Requests', message:'Standard Requests'}); }
    });
}

//Save custom requests
exports.saveCustomRequest=function(name, email, phone, response)
{
    db.CustomRequests.save({"name":name, "email":email, "phone":phone}, function(error, saved)
    {
        if(error || !saved)
        {   response.render('Error', {title:'Error'});  }
        else
        {   response.render('savedCustomRequest', {title:'Saved Custom Request', message:'Saved Custom Request'}); }
    });
}

//View all custom requests (admin)
exports.viewCustomRequests=function(response)
{
    db.CustomRequests.find({}, function(error, customRequests)
    {
        if(error || !customRequests)
        {   response.render('Error', {title:'Error'});  }
        else 
        {   response.render('viewCustomRequests', {custReq:customRequests, title:'View Custom Requests', message:'Custom Requests'});  }
    });
}

//Validate admin user
exports.verifyAdmin=function(name, password, response)
{
    db.adminUsers.find({"name":name, "password":password}, function(error, adminUsers)
    {
        if(error || !adminUsers)
        {   
            response.render('error', {title:'Error'});  
            console.log('Invalid user');
        }
        else if(adminUsers.length == 0)
        {
            console.log('Invalid user');
            response.render('adminLogin', {title:'Invalid user', message:'Invalid User'});
        }
        else
        {   response.render('adminSuccess', {title:'Welcome Admin', message:'Welcome Admin'});  }
    });
}

//Display feedback/testimonials
exports.showFeedback=function(response)
{
    db.testimonials.find({}, function(error, testimonials)
    {
        if(error || !testimonials)
        {   response.render('error', {title:'Error'});  }
        else
        {   response.render('feedback', {test:testimonials, title:'Feedback', message:'Testimonials'}); }
    });
}

//Register new users
exports.saveNewUsers=function(regFName, regLName, regEmail, regPhone, regUsername, password, selectedChoice, response)
{
    db.RegisteredUsers.save({"firstname":regFName, "lastname":regLName, "email":regEmail, "phone":regPhone, "username":regUsername, "password":password, "selection":selectedChoice}, function(error, saved)
    {
        if(error || !saved)
        {   response.render('error', {title:'Error', message:error}); }
        else
        {   response.render('savingRegisteredUsers', {title:'Saving Registered Users', message:'Registration Complete'});   }
    });
}

//View registered users
exports.displayRegisteredUsers=function(response)
{
    db.RegisteredUsers.find({}, function(error, registeredUsers)
    {
        if(error || !registeredUsers)
        {   response.render('error', {title:'Error', message:error});   }
        else
        {   response.render('viewRegisteredUsers', {regUsr:registeredUsers, title:'Registered Users', message:'Registered Users'}); }
    })
}

//Validate registered users (not admin)
exports.verifyUser=function(username, password, response)
{
    db.RegisteredUsers.find({"username":username, "password":password}, function(error, users)
    {
        if(error || !users)
        {   response.render('error', {title:'Error', message:error});   }
        else if(users.length==0)
        {   response.render('login', {title:'Invalid User', message:'Not a valid user'});   }
        else
        {   response.render('loginSuccess', {title:'Login Success', message:'Welcome'});  }
    });
}
