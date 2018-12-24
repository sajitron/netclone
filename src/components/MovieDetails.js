import React from 'react';

const MovieDetails = (props) => {
	return <div>Here is the id: {props.match.params.movie_id}</div>;
};

export default MovieDetails;
