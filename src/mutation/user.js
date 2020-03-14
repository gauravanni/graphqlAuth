const User=require('../model/user');

createUser=async(parent,args)=>{
    const newUser=new User({
        name:args.name,
        email:args.email
    })
    const error=await newUser.save()
    if(error) return error
    return newUser
}

deleteUser=async(parent,{id})=>{
    try{
        const user=await User.findByIdAndDelete(id)
        return user;
    }
    catch(err){
        console.error(err);
    }
}

editUser=async(parent,{id,name,email})=>{
    try{
        const user=await User.findByIdAndUpdate(id,{name,email})
        return user;
    }
    catch(err){
        console.error(err);
    }
}

module.exports={createUser,deleteUser,editUser};