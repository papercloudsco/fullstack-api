import AccountsPassword from '@accounts/password';
import MongoDBInterface from '@accounts/mongo';
import AccountsServer from '@accounts/server';

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
