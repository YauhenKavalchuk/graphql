import { gql } from 'apollo-boost';

export const moviesQuery = gql`
  query moviesQuery {
    movies {
      id
      name
      genre
    }
  }
`;
