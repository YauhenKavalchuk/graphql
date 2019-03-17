import { gql } from 'apollo-boost';

export const addDirectorMutation = gql`
  mutation addDirector($name: String!, $age: Int!) {
    addDirector(name: $name, age: $age) {
      name
    }
  }
`;

export const updatedDirectorMutation = gql`
  mutation updateDirector($id: ID, $name: String!, $age: Int!) {
    updateDirector(id: $id, name: $name, age: $age) {
      name
    }
  }
`;
