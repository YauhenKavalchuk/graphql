import { gql } from 'apollo-boost';

export const deleteDirectorMutation = gql`
  mutation deleteDirector($id: ID) {
    deleteDirector(id: $id) {
      id
    }
  }
`;
