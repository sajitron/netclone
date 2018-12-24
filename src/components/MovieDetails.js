import React, { Fragment, PureComponent } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ActorCard from './ActorCard';
import { Link } from 'react-router-dom';

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
						if (loading) return <h4>Loading...</h4>;
						if (error) console.log(error);

						const { title, tagline, overview, backdrop_path, poster_path, release_date } = data.movie;

						return (
							<div>
								<img src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`} alt={title} />
								<img src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt={title} />
								<h1>{title}</h1>
								<h2>{tagline}</h2>
								<h4>{release_date}</h4>
								<p>{overview}</p>
								{data.movie.cast.map((actor) => {
									return <ActorCard key={actor.id} actor={actor} />;
								})}

								<hr />
								<Link to="/">Back</Link>
							</div>
						);
					}}
				</Query>
			</Fragment>
		);
	}
}

export default MovieDetails;
