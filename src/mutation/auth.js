const { authenticateFacebook, authenticateGoogle } = require('../passport');
const User=require('../model/user');

authGoogle=async(parent,args)=>{
  if(args){
    try{
      console.log('inside auth',args);
      const userExists=await User.findOne({email:args.email})
      if(!userExists){
        const newUser= new User(args).save();
        return newUser
      }
    }
    catch(err){
      console.log(err)
    }
  }
  
}

module.exports={authGoogle}