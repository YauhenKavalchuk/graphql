import { gql } from 'apollo-boost';

export const directorsQuery = gql`
  query directorsQuery {
    directors {
      id
      name
    }
  }
`;
