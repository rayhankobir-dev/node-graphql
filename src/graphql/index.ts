import { ApolloServer } from "@apollo/server";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typedef";

async function createApolloGraphqlServer() {
  const gqlServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
  });

  // Start the gql server
  await gqlServer.start();

  return gqlServer;
}

export default createApolloGraphqlServer;
