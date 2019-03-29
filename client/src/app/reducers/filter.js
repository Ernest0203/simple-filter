const initialState = {
  multifilters: [],
};

const filter = (state = initialState, action) => {
  switch(action.type) {

    case 'UPDATE_FILTER': 
      return { 
        ...state, 
        multifilters: action.data,
      }
    
    default:
      return state;
  }
}

export default filter;