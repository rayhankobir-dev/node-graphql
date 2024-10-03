import express from "express";
import createApolloGraphqlServer from "@src/graphql";
import { expressMiddleware } from "@apollo/server/express4";

async function init() {
  const app = express();
  const PORT = Number(process.env.PORT) || 8000;

  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({ message: "Server is up and running" });
  });

  app.use(
    "/graphql",
    expressMiddleware(await createApolloGraphqlServer(), {
      context: async ({ req }) => {
        //TODO: Add auth context
        return {};
      },
    })
  );

  app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));
}

init();
