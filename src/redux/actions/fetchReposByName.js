export default function fetchReposByName(name) {
  return async (dispatch) => {
	dispatch({type: "PENDING_FETCHING_REPOS"})
	const response = await fetch(`https://api.github.com/search/repositories?q=${name}`)
	const responseToJson = await response.json()
	dispatch({
	  type: "FETCH_REPOS",
	  payload: responseToJson
	})
  }
}