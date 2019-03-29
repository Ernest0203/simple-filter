import { combineReducers } from 'redux';

import listing from './listing.js';
import filter from './filter.js';

const general = combineReducers({
  listing, 
  filter
})

export default general;