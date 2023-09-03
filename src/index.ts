import path from 'node:path';
import { readFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { createYoga, createSchema } from 'graphql-yoga';

import type { Resolvers } from './resolvers-types';

const schemaPath = path.resolve(
  process.cwd(),
  'src',
  './schema.graphql'
);

const typeDefs = readFileSync(schemaPath, 'utf8');

const resolvers: Resolvers = {
  Query: {
    hello: () => 'Hello world!',
  }
}

const schema = createSchema({ typeDefs, resolvers })
const yoga = createYoga({ schema })

const server = createServer(yoga);
server.listen(9018, () => {
  console.info('Server is running on port 9018')
});
