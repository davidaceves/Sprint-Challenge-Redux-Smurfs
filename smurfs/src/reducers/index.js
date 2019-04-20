import {
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,

  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE

} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null

}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SMURF_START:
      return {
        ...state,
        addingSmurf: true,
        error: ""
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload
      }
    case ADD_SMURF_FAILURE:
      return {
        ...state, 
        error: action.payload.status
      }
    case FETCH_SMURF_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ""
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload.status
      };
    case DELETE_SMURF_START:
      return {
        ...state,
        deletingSmurf: true,
        error: ""
      }
    case DELETE_SMURF_SUCCESS: 
      return {
        ...state,
        deletingSmurf: false,
        smurfs: action.payload
      }
    case DELETE_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload.status
      }
    default: 
      return state;
  }
};

export default reducer;