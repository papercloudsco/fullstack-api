import { gql } from 'apollo-server';
export * from './resolvers';

export const UserProfileSchema = gql`
  "The main User object used for authentication etc"
  type UserProfile {
    id: String
    firstName: String
    lastName: String
    email: String
    emails: [EmailRecord]
  }
`;
