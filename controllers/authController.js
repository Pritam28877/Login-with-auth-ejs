//the controller for the get middleware 

module.exports.signup_get = (req,res)=>{
    
    res.render('signup');
}

//the controller for the get middleware 
module.exports.login_get = (req,res)=>{
    
    res.render('login');
}


//the controller for the post middleware 
module.exports.signup_post = (req,res)=>{
    
    res.render('signup');
}


//the controller for the post middleware 
module.exports.login_post= (req,res)=>{
    
    res.render('login');
}
