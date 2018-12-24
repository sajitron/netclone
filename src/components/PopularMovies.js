import React, { Fragment, PureComponent } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import MovieItem from './MovieItem';

const POPULAR_MOVIES_QUERY = gql`
	query PopularMoviesQuery {
		popularMovies {
			id
			title
			poster_path
			release_date
		}
	}
`;

export class PopularMovies extends PureComponent {
	render() {
		return (
			<Fragment>
				<h1>Popular Movies</h1>
				<Query query={POPULAR_MOVIES_QUERY}>
					{({ loading, error, data }) => {
						if (loading) return <h3>Loading...</h3>;
						if (error) console.log(error);

						return (
							<Fragment>
								{data.popularMovies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
							</Fragment>
						);
					}}
				</Query>
			</Fragment>
		);
	}
}

export default PopularMovies;
