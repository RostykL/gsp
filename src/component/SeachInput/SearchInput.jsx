import {useEffect, useState} from "react";
import fetchReposByName from "../../redux/actions/fetchReposByName";
import {useDispatch, useSelector} from "react-redux";

export default function SearchInput() {
  const [name, setName] = useState("")
  const historyCount = useSelector(state => state.history).history.length;
  const historyName = useSelector(state => state.history).selectHistoryName;

  const dispatch = useDispatch()

   useEffect(async () => {
     if(historyName) {
	   await dispatch(fetchReposByName(historyName))
	 }
   }, [historyName])

  const findRepo = async (e) => {
	if (e.keyCode === 13) {
	  await dispatch(fetchReposByName(name))
	  await dispatch({
		type: "PUSH_HISTORY",
		payload: name
	  })
	  await setName("")
	  if (historyCount >= 5) {
		dispatch({type: "POP_HISTORY"})
	  }
	}
  }

  return (
	  <div className={"searchInput"}>
		<input placeholder={"search term"} onChange={e => setName(e.target.value)}
			   onKeyUp={e => findRepo(e)}
			   value={name}
		/>
	  </div>
  );
}