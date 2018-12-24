import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import MoviesPage from '../components/MoviesPage';
import MovieDetails from '../components/MovieDetails';
import TopRatedmovies from '../components/TopRatedMovies';
import PopularMovies from '../components/PopularMovies';
import NowPlayingMovies from '../components/NowPlayingMovies';
import NotFoundPage from '../components/NotFoundPage';

const client = new ApolloClient({
	uri: '/graphql'
});

const AppRouter = () => (
	<ApolloProvider client={client}>
		<BrowserRouter>
			<div>
				<Header />
				<Switch>
					<Route path="/" component={MoviesPage} exact={true} />
					<Route path="/movie/:movie_id" component={MovieDetails} />
					<Route path="/popular" component={PopularMovies} />
					<Route path="/playing" component={NowPlayingMovies} />
					<Route path="/top" component={TopRatedmovies} />
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		</BrowserRouter>
	</ApolloProvider>
);

export default AppRouter;
