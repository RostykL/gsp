const initialState = {
  reposList: [],
  loading: false,
  error: null,
}

export default function reposReducer(state = initialState, action) {
  switch(action.type) {
	case "PENDING_FETCHING_REPOS":
	  return {
		...state,
		loading: true,
	  }
	case "FETCH_REPOS":
	  return {
	    ...state,
	    reposList: action.payload,
	    loading: false,
		error: null,
	  }

	default:
	  return state;
  }
}