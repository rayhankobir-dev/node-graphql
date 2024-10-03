import { ApolloServer } from "@apollo/server";
import { Action } from "./action";

async function createApolloGraphqlServer() {
  const gqlServer = new ApolloServer({
    typeDefs: `
            ${Action.typeDefs}
            type Query {
               ${Action.queries}
            }

            type Mutation {
               ${Action.mutations}
            }
        `,
    resolvers: {
      Query: {
        ...Action.resolvers.queries,
      },
      Mutation: {
        ...Action.resolvers.mutations,
      },
    },
  });

  // Start the gql server
  await gqlServer.start();

  return gqlServer;
}

export default createApolloGraphqlServer;
