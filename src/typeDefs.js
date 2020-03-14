module.exports=`

type AuthResponse{
    name: String!
    email:String!
    avatar:String!
}

type Query{
    getUsers:[User]!
    getUser(id:ID):User
}

type User{
    id:ID!,
    name:String!,
    email:String!

}

type Mutation {
    createUser(name: String!, email: String!): User
    deleteUser(id:ID!): User
    editUser(id:ID!,name: String!, email: String!): User
    authGoogle(name:String,email:String,avatar:String):AuthResponse
}
`