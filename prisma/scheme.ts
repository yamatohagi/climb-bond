import 'reflect-metadata';
import { buildSchemaSync } from 'type-graphql';
import { resolvers } from '@generated/type-graphql';

export const schema = buildSchemaSync({
  resolvers: resolvers,
  validate: false,
});
