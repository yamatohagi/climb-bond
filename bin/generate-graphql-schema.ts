import 'reflect-metadata';

import path from 'path';
import { buildSchemaSync } from 'type-graphql';
import { resolvers } from '@generated/type-graphql';

buildSchemaSync({
  resolvers: resolvers,
  validate: false,
  emitSchemaFile: `${path.dirname(__dirname)}/generated/schema.gql`,
});
