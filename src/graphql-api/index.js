// // TOP LEVEL IMPORTS
import { merge } from 'lodash';
import { gql } from 'apollo-server';
// // User
import { QueryResolvers, QuerySchema } from './types/Query';
import { MutationSchema, MutationResolvers } from './types/Mutation';
import { UserProfileSchema, UserProfileResolvers } from './types/UserProfile';

// using interefaces with each vendor's schema (caterer, venue, etc) will throw an error if one of the types is missing something form our Vendor interface... not exactly like classes/inheritance, but at least it will keep the sub-types in like with the Vendor type.... albeit not DRY

export const typeDefs = gql`
  ${QuerySchema}
  ${MutationSchema}
  ${UserProfileSchema}
`;

export const CustomResolvers = merge(
  QueryResolvers,
  MutationResolvers,
  UserProfileResolvers
);
