const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');


const typeDefs=require('./typeDefs')
const resolvers=require('./resolvers')

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

const options = {
    port: process.env.PORT || 4000
  }
  

mongoose.connect(`mongodb+srv://gaurav:gaurav@cluster0-txbot.mongodb.net/test`)
.then(()=>{
    console.log('mongodb connected')
    //server.start(() => console.log('Server is running on localhost:4000'))
    server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  ),
)
}).catch((err)=>{
    console.error(err)
})
  


