const User=require('../model/user');

getUsers=async()=>{
    try{
    const res=await User.find({})
    return res;
    }
    catch(err){
        console.error(err)
    }
}

getUser=async(parent,{id})=>{
    try{
    const res=await User.findById(id)
    return res;
    }
    catch(err){
        console.error(err)
    }
    
}

module.exports={getUsers,getUser}