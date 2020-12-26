import { ApolloServer } from "apollo-server";

import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: process.env.NODE_ENV == "production" ? false : true
});

server.listen().then(({ url }) => {
  console.log(`Listening at: ${url}`);
});