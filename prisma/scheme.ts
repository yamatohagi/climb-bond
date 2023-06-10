import 'reflect-metadata';
import { buildSchemaSync } from 'type-graphql';
import { resolvers } from '@generated/type-graphql';
import path from 'path';

export const schema = buildSchemaSync({
  resolvers,
  validate: false,
  // emitSchemaFile: `${path.dirname(__dirname)}/../../../schema/generated/schema.gql`,
});
