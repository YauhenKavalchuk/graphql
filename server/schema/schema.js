const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;

const movies = [
	{ id: '1', name: 'Pulp Fiction', genre: 'Crime' },
	{ id: '2', name: '1984', genre: 'Sci-Fi' },
	{ id: 3, name: 'V for vendetta', genre: 'Sci-Fi-Triller' },
	{ id: 4, name: 'Snatch', genre: 'Crime-Comedy' },
];

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return movies.find(movie => movie.id == args.id);
      },
    },
  }
});

module.exports = new GraphQLSchema({
  query: Query,
});
