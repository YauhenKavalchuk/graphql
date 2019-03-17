import { gql } from 'apollo-boost';

export const directorsQuery = gql`
  query directorsQuery($name: String) {
    directors(name: $name) {
      id
      name
      age
      movies {
        name
        id
      }
    }
  }
`;
