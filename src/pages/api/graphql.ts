// import 'reflect-metadata';
// import { ApolloServer } from '@apollo/server';
// import { startServerAndCreateNextHandler } from '@as-integrations/next';
// import { resolvers } from '@generated/type-graphql';
// import { buildSchema } from 'type-graphql';
// import { NextRequest } from 'next/server';
// import { gql } from 'apollo-server';

// async function startApolloServer() {
//   const schema = await buildSchema({
//     resolvers,
//     validate: false,
//   });

//   const server = new ApolloServer({
//     schema,
//   });

//   return startServerAndCreateNextHandler<NextRequest>(server, {
//     context: async (req) => ({ req }),
//   });
// }

// export default startApolloServer();

import 'reflect-metadata';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { schema } from '../../../prisma/scheme';
import { prisma } from '../../../prisma/context';

const server = new ApolloServer({
  schema,
});

export default startServerAndCreateNextHandler(server, {
  context: async (req) => ({ req, prisma }),
});
