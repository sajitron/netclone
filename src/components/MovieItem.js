import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieItem({ movie: { id, title, poster_path, release_date } }) {
	return (
		<div>
			<Link to={`/movie/${id}`}>
				<img src={`http://image.tmdb.org/t/p/w200/${poster_path}`} alt={title} />
			</Link>
			<h2>{title}</h2>
			<h4>{release_date}</h4>
		</div>
	);
}
