const passport    = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.authJwtReq = passport.authenticate('jwt', { 
   secretOrKey : process.env.MY_SECRET, 
   session     : false 
});

exports.authReq = async(req, res, next) => {
   const token = req.headers.jwtoken;
   const user = jwt.verify(token, process.env.MY_SECRET);
   if(user && user.exp < Date.now()){
      const isUser = await User.find({_id: user._id})
         .catch(error=>{ return error });
      isUser ? ()=>{ return next() } : ()=>{ return };
   }
   else return;
}