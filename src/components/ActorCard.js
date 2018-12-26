import React, { Fragment } from 'react';

const ActorCard = ({ actor: { id, name, profile_path } }) => {
	return (
		<Fragment>
			<figure className="movie-item">
				<img src={`https://image.tmdb.org/t/p/w185/${profile_path}`} alt={name} className="movie-item__image" />
				<figcaption className="movie-item__title">{name}</figcaption>
			</figure>
		</Fragment>
	);
};

export default ActorCard;
