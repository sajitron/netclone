import React, { Fragment } from 'react';
import NowPlayingMovies from './NowPlayingMovies';
import PopularMovies from './PopularMovies';
import TopRatedMovies from './TopRatedMovies';

const MoviesPage = () => (
	<Fragment>
		<NowPlayingMovies />
		<PopularMovies />
		<TopRatedMovies />
	</Fragment>
);

export default MoviesPage;
