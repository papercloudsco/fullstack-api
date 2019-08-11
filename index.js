import AccountsPassword from '@accounts/password';
import MongoDBInterface from '@accounts/mongo';
import AccountsServer from '@accounts/server';
import { AccountsModule } from '@accounts/graphql-api';
import { ApolloServer } from 'apollo-server';
import { db } from './src/modules/mongodb.js';

const password = new AccountsPassword();

const accountsServer = new AccountsServer(
  {
    db: new MongoDBInterface(db),
    tokenSecret: 'SECRET'
  },
  {
    password
  }
);

export const accountsGraphQL = AccountsModule.forRoot({ accountsServer });

const typeDefsWithAccounts = [typeDefs, accountsGraphQL.typeDefs];

const resolvers = merge(accountsGraphQL.resolvers, CustomResolvers);
