const {createUser,deleteUser,editUser}=require('./mutation/user')
const {authGoogle}=require('./mutation/auth')
const {getUser,getUsers}=require('./query/user')

const resolvers={
    Query:{
        // get Users
        getUsers:getUsers,
        // get User
        getUser:getUser
    },
    Mutation:{
        // auth Google
        authGoogle:authGoogle,
        // create user
        createUser:createUser,
        // delete user
        deleteUser:deleteUser,
        // update user
        editUser:editUser
    }
}

module.exports=resolvers;