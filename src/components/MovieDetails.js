import React, { Fragment, PureComponent } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import ActorCard from './ActorCard';
import LoadingPage from './LoadingPage';

const MOVIE_QUERY = gql`
	query MovieQuery($movie_id: Int!) {
		movie(id: $movie_id) {
			id
			title
			tagline
			backdrop_path
			poster_path
			overview
			release_date
			cast(limit: 10) {
				id
				name
				profile_path
			}
		}
	}
`;

export class MovieDetails extends PureComponent {
	render() {
		let { movie_id } = this.props.match.params;
		movie_id = parseInt(movie_id);
		return (
			<Fragment>
				<Query query={MOVIE_QUERY} variables={{ movie_id }}>
					{({ loading, error, data }) => {
						if (loading) return <LoadingPage />;
						if (error) console.log(error);

						const { title, tagline, overview, backdrop_path, poster_path, release_date } = data.movie;

						return (
							<div className="container">
								<img
									src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}
									alt={title}
									className="backdrop-image"
								/>
								<div className="movie-details flex">
									<div className="column-main tile">
										<img
											src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
											alt={title}
											className="poster-image"
										/>
									</div>
									<div className="column-sidebar">
										<h1 className="tile centered">{title}</h1>
										<h3 className="tile centered">{tagline}</h3>
										<h4 className="tile centered">
											<strong>Released:</strong> {release_date}
										</h4>
										<p className="tile centered">
											<strong>Overview:</strong> {overview}
										</p>
									</div>
								</div>
								<h1 className="movies__title">Cast</h1>
								<div className="movies__posters">
									{data.movie.cast.map((actor) => {
										return <ActorCard key={actor.id} actor={actor} />;
									})}
								</div>
								<hr />
								<Link to="/" className="button">
									Back
								</Link>
							</div>
						);
					}}
				</Query>
			</Fragment>
		);
	}
}

export default MovieDetails;
