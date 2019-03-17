import { gql } from 'apollo-boost';

export const addMovieMutation = gql`
  mutation addMovie($name: String!, $genre: String!, $watched: Boolean!, $rate: Int, $directorId: ID) {
    addMovie(name: $name, genre: $genre, watched: $watched, rate: $rate, directorId: $directorId) {
      name
    }
  }
`;

export const updateMovieMutation = gql`
  mutation updateMovie($id: ID, $name: String!, $genre: String!, $watched: Boolean!, $rate: Int, $directorId: ID) {
    updateMovie(id: $id, name: $name, genre: $genre, watched: $watched, rate: $rate, directorId: $directorId) {
      name
    }
  }
`;
