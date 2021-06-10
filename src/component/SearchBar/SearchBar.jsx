import SearchInput from "../SeachInput/SearchInput";
import {useDispatch, useSelector} from "react-redux";

import {uid} from 'uid'

export default function SeachBar() {
  const repoHistory = useSelector(state => state.history)
  const dispatch = useDispatch()

  const selectName = (name) => {
	dispatch({type: "SELECT_HISTORY_NAME", payload: name});
  }

  return (
	  <div className={"searchbar"}>
		<SearchInput/>
		<div className="history">
		  Search history:
		  <hr/>
		  {!repoHistory.loading && repoHistory.history.map(el => <div key={uid()} onClick={() => selectName(el)}
																	  className={"historyElement"} key={uid()}>
			{el}
		  </div>)}
		</div>
	  </div>
  );
}