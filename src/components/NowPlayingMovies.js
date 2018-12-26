import React, { Fragment, PureComponent } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import MovieItem from './MovieItem';
import LoadingPage from './LoadingPage';

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
				<div className="container">
					<h1 className="movies__title">Now Showing</h1>
					<Query query={NOW_PLAYING_MOVIES_QUERY}>
						{({ loading, error, data }) => {
							if (loading) return <LoadingPage />;
							if (error) console.log(error);

							return (
								<Fragment>
									<div className="movies__posters">
										{data.nowPlayingMovies.map((movie) => (
											<MovieItem key={movie.id} movie={movie} />
										))}
									</div>
								</Fragment>
							);
						}}
					</Query>
				</div>
			</Fragment>
		);
	}
}

export default NowPlayingMovies;
