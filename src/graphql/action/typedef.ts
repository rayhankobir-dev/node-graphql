export const typeDefs = `#graphql
    type Action {
        _id: ID!
        createdAt: Long!
        updatedAt: Long
        name: String!
        description: String
        functionString: String
        resourceTemplateId: ID
        resourceTemplate: ResourceTemplate
    }
`;
