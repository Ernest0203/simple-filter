import { connect } from 'react-redux';

import Listing from '../components/listing/listing.jsx';

import { fetchData } from '../actions/listingActions.js';

const mapStateToProps = (state) => {
  const { data } = state.listing;
  return { data};
}

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => {
    dispatch(fetchData());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Listing);