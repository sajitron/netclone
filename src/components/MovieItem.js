import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieItem({ movie: { id, title, poster_path, release_date } }) {
	return (
		<div>
			<figure className="movie-item">
				<Link to={`/movie/${id}`}>
					<img
						src={`http://image.tmdb.org/t/p/w300/${poster_path}`}
						alt={title}
						className="movie-item__image"
					/>
				</Link>
				<figcaption className="movie-item__title">{title}</figcaption>
				<h4 className="movie-item__title">Released: {release_date}</h4>
			</figure>
		</div>
	);
}
