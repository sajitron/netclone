const axios = require('axios');
const { GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLString, GraphQLSchema, GraphQLNonNull } = require('graphql');
require('dotenv').config({ path: './.env.development' });

const apikey = process.env.API_KEY;

// Cast Type
const CastType = new GraphQLObjectType({
	name: 'Cast',
	fields: () => ({
		id: {
			type: GraphQLInt
		},
		name: {
			type: GraphQLString
		},
		profile_path: {
			type: GraphQLString
		}
	})
});

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
		tagline: {
			type: GraphQLString
		},
		vote_average: {
			type: GraphQLInt
		},
		overview: {
			type: GraphQLString
		},
		poster_path: {
			type: GraphQLString
		},
		backdrop_path: {
			type: GraphQLString
		},
		release_date: {
			type: GraphQLString
		},
		cast: {
			type: new GraphQLList(CastType),
			args: {
				limit: {
					type: GraphQLNonNull(GraphQLInt)
				}
			},
			resolve(parent, args) {
				return axios
					.get(`https://api.themoviedb.org/3/movie/${parent.id}/credits?api_key=${apikey}`)
					.then((res) => {
						let castData = res.data.cast;
						let newData = [];
						for (let i = 0; i < args.limit; i++) {
							newData.push(castData[i]);
						}
						return newData;
					});
			}
		}
	})
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		nowPlayingMovies: {
			type: new GraphQLList(MovieType),
			resolve(parent, args) {
				return axios
					.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`)
					.then((res) => res.data.results);
			}
		},
		popularMovies: {
			type: new GraphQLList(MovieType),
			resolve(parent, args) {
				return axios
					.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`)
					.then((res) => res.data.results);
			}
		},
		topRatedMovies: {
			type: new GraphQLList(MovieType),
			resolve(parent, args) {
				return axios
					.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}`)
					.then((res) => res.data.results);
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
				return axios
					.get(`https://api.themoviedb.org/3/movie/${args.id}?api_key=${apikey}`)
					.then((res) => res.data);
			}
		},
		cast: {
			type: new GraphQLList(CastType),
			args: {
				movie_id: {
					type: GraphQLInt
				},
				limit: {
					type: GraphQLNonNull(GraphQLInt)
				}
			},
			resolve(parent, args) {
				return axios
					.get(`https://api.themoviedb.org/3/movie/${args.movie_id}/credits?api_key=${apikey}`)
					.then((res) => {
						let castData = res.data.cast;
						let newData = [];
						for (let i = 0; i < args.limit; i++) {
							newData.push(castData[i]);
						}
						return newData;
					});
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery
});
