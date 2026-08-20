const {getUser}=require("../service/auth");

async function restrictToLoggedinUserOnly(req,res,next){
   const userUid = req.cookies.uid;
   const user = getUser(userUid);
    if(!user) return res.redirect("/login");
    
    if(!user) return res.redirect("/login");

    req.user=user;
    next();
}

module.exports = {
    restrictToLoggedinUserOnly,
}