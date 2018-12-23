const axios = require('axios');
const { GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLString, GraphQLSchema } = require('graphql');

// Movie Type
const MovieType = new GraphQLObjectType({
	name: 'Movie',
	fields: () => ({
		id: {
			type: GraphQLInt
		},
		title: {
			type: GraphQLString
		},
		vote_average: {
			type: GraphQLInt
		},
		poster_path: {
			type: GraphQLString
		},
		release_date: {
			type: GraphQLString
		}
	})
});

const apikey = process.env.API_KEY;

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		movies: {
			type: new GraphQLList(MovieType),
			resolve(parent, args) {
				return axios
					.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US&page=1`)
					.then((res) => res.data);
			}
		},
		movie: {
			type: MovieType,
			args: {
				id: {
					type: GraphQLInt
				}
			},
			resolve(parent, args) {
				axios
					.get(`https://api.themoviedb.org/3/movie/${args.id}?api_key=${apikey}&language=en-US`)
					.then((res) => res.data);
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery
});
