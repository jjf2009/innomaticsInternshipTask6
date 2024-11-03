
import PropTypes from 'prop-types';

const MovieListHeading = (props) => {
	return (
		<div className="col">
			<h1>{props.heading}</h1>
		</div>
	);
};

// Define prop types for MovieListHeading component
MovieListHeading.propTypes = {
	heading: PropTypes.string.isRequired,
};

export default MovieListHeading;
