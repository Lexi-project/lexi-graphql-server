import path from 'node:path';
import { readFileSync } from 'node:fs';
import { createServer } from 'node:http';

import axios from 'axios';
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
    exercise: async (_, { exerciseConfiguration }) => {
      try {
        const response = await axios.post('http://localhost:9001/exercises', exerciseConfiguration);
        const { data } = response.data;

        return {
          id: '1',
          content: data.generatedContent,
          exerciseContent: data.exerciseContent
        };
      } catch (error) {
        // Error response
        console.error(error);
        return null;
      }
    }
  }
}

const schema = createSchema({ typeDefs, resolvers })
const yoga = createYoga({ schema })

const server = createServer(yoga);
server.listen(9018, () => {
  console.info('Server is running on port 9018')
});
