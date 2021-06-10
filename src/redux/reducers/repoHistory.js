const initialState = {
  history: [],
  selectHistoryName: null,
  loading: false,
  error: null,
}

export default function repoHistory(state = initialState, action) {
  switch (action.type) {
	case "PUSH_HISTORY":
	  return {
		...state,
		loading: false,
		history: [action.payload, ...state.history],
		error: null,
	  }
	case "POP_HISTORY":
	  return {
		...state,
		history: state.history.filter((el, i) => i !== state.history.length - 1),
		loading: false,
		error: null,
	  }

	case "SELECT_HISTORY_NAME":
	  return {
	    ...state,
		selectHistoryName: action.payload
	  }
	default:
	  return state;
  }
}