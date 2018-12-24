import React, { Fragment } from 'react';

const ActorCard = ({ actor: { id, name, profile_path } }) => {
	return (
		<Fragment>
			<img src={`https://image.tmdb.org/t/p/w185/${profile_path}`} alt={name} />
			<h2>{name}</h2>
		</Fragment>
	);
};

export default ActorCard;
