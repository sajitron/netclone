import React, { Fragment, PureComponent } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import MovieItem from './MovieItem';

const TOP_MOVIES_QUERY = gql`
	query TopRatedMoviesQuery {
		topRatedMovies {
			id
			title
			poster_path
			release_date
		}
	}
`;

export class TopRatedMovies extends PureComponent {
	render() {
		return (
			<Fragment>
				<h1>Top Rated Movies</h1>
				<Query query={TOP_MOVIES_QUERY}>
					{({ loading, error, data }) => {
						if (loading) return <h3>Loading...</h3>;
						if (error) console.log(error);

						return (
							<Fragment>
								{data.topRatedMovies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
							</Fragment>
						);
					}}
				</Query>
			</Fragment>
		);
	}
}

export default TopRatedMovies;