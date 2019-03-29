import { connect } from 'react-redux';

import Filter from '../components/filter/filter.jsx';
import { applyFilter } from '../actions/filterActions.js';

const mapStateToProps = (state) => {
  const { multifilters } = state.filter;
  return { multifilters };
}

const mapDispatchToProps = (dispatch) => ({
  applyFilter: (args) => {
    dispatch(applyFilter(args))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);