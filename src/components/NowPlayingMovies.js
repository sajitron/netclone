import React, { Fragment, PureComponent } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import MovieItem from './MovieItem';

const NOW_PLAYING_MOVIES_QUERY = gql`
	query NowPlayingMoviesQuery {
		nowPlayingMovies {
			id
			title
			poster_path
			release_date
		}
	}
`;

export class NowPlayingMovies extends PureComponent {
	render() {
		return (
			<Fragment>
				<h1>Now Playing Movies</h1>
				<Query query={NOW_PLAYING_MOVIES_QUERY}>
					{({ loading, error, data }) => {
						if (loading) return <h3>Loading...</h3>;
						if (error) console.log(error);

						return (
							<Fragment>
								{data.nowPlayingMovies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
							</Fragment>
						);
					}}
				</Query>
			</Fragment>
		);
	}
}

export default NowPlayingMovies;
