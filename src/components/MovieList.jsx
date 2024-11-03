import PropTypes from 'prop-types';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div
					key={index}
					className="relative flex justify-start m-3 w-48"
				>
					<img src={movie.Poster} alt="movie" className="w-full h-auto" />
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-300"
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

// Define prop types for MovieList component
MovieList.propTypes = {
	movies: PropTypes.arrayOf(
		PropTypes.shape({
			Poster: PropTypes.string,
			imdbID: PropTypes.string,
		})
	).isRequired,
	handleFavouritesClick: PropTypes.func.isRequired,
	favouriteComponent: PropTypes.elementType.isRequired,
};

export default MovieList;
