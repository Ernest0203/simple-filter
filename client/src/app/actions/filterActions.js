import axios from 'axios';

export const applyFilter = args => dispatch => {
  dispatch(updateFilter(args))
  return axios.get('/users', { params: { multifilters: args } })
    .then((res) => dispatch(applyFilterSuccess(res.data)))
    .catch((err) => console.log(err));
}

function updateFilter(data) {
  return {
    type: 'UPDATE_FILTER',
    data
  }
}

function applyFilterSuccess(data) {
  return {
    type:'FETCH_DATA',
    data
  }
}
