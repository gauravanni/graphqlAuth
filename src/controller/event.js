const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const Event =require('../model/event');

const eventGraphQl=()=>{
  return graphqlHttp({
        schema: buildSchema(`
          type Event {
            _id: ID!
            title: String!
            description: String!
            price: Float!
            date: String!
          }
          input EventInput {
            title: String!
            description: String!
            price: Float!
            date: String!
          }
          type RootQuery {
              events: [Event!]!
          }
          type RootMutation {
              createEvent(eventInput: EventInput): Event
          }
          schema {
              query: RootQuery
              mutation: RootMutation
          }
      `),
        rootValue: {
            events: async() => {
                try{
                    const event=await Event.find({});
                    console.log('event',event);
                    return event;
                }
                catch(err){
                    console.log('reading error',err)
                }
            },
            createEvent: async (args) => {
                try {
                    const event = new Event({
                        title: args.eventInput.title,
                        description: args.eventInput.description,
                        price: +args.eventInput.price,
                        date: new Date(args.eventInput.date)
                    });
                   const result=await event.save();
                   console.log(result);
                   return result;
                }
                catch (err) {
                    console.log('Cannot save', err);
                }
            }
        },
        graphiql: true
  });
} 
module.exports=eventGraphQl;
