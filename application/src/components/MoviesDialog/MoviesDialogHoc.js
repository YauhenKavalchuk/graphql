import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { deleteMovieMutation } from './mutations';
import { moviesQuery } from '../MoviesTable/queries';

const withGraphqlDelete = graphql(deleteMovieMutation, {
  props: ({ mutate }) => ({
    deleteMovie: id => mutate({
      variables: id,
      refetchQueries: [{
        query: moviesQuery,
        variables: { name: '' },
      }],
    }),
  }),
});

export default compose(withGraphqlDelete);
