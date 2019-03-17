import { gql } from 'apollo-boost';

export const deleteMovieMutation = gql`
  mutation deleteMovie($id: ID) {
    deleteMovie(id: $id) {
      id
    }
  }
`;
