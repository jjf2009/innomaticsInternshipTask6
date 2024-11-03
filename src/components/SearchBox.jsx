
import PropTypes from 'prop-types';

const SearchBox = (props) => {
  return (
    <div className='col col-sm-4'>
      <input
        className='form-control'
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder='Type to search...'
      />
    </div>
  );
};

// Add prop type validation
SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

export default SearchBox;
