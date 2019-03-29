const initialState = {
  data: [],
};

const listing = (state = initialState, action) => {
  switch(action.type) {

    case 'FETCH_DATA': 
      return { 
        ...state, 
        data: action.data,
      }
    
    default:
      return state;
  }
}

export default listing;