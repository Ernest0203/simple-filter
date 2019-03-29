import axios from 'axios';

export const fetchData = args => dispatch => {
  return axios.get('/users', args)
    .then((res) => dispatch(fetchDataSuccess(res.data)))
    .catch((err) => console.log(err));
}

function fetchDataSuccess(data) {
  return {
    type:'FETCH_DATA',
    data
  }
}
