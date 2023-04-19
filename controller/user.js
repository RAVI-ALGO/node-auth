const User = require("../models/user");

exports.home = (req,res)=>{
    res.render("home");
}

exports.register = (req,res)=>{
    res.render("register");
}
exports.getlogin = (req,res)=>{
    res.render("login",{emsg:"" ,pmsg:""});
}

exports.createUser = (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const user = new User({
        email:username,
        password:password
    });

    user.save().then(()=>{
        res.render("secrets")
    }).catch((err)=>{
        console.log(err);
    });
}


exports.userLogin = (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const pmsg = "Password not matched!";
    const emsg = "Email does not exist!";
    User.findOne({email:username}).then((foundUser)=>{
        if(foundUser)
        {
            if(foundUser.password == password)
            {
                res.render("secrets")
            }
            else{
                
                res.render("login",{emsg:"",pmsg:pmsg});
            }
        }
        else
        {
            res.render("login",{emsg:emsg,pmsg:""});
        }
    }).catch((err)=>{
        console.log(err);
    })
}