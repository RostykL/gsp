import Repo from "../Repo/Repo";
import {useSelector} from "react-redux";
import {uid} from 'uid';

export default function ReposList() {
  const repositories = useSelector(state => state.repos)
  if (repositories.loading) {
	return <p>Looking for repositories...</p>
  }
  if (repositories.error) {
	return <p>Erorr has occured</p>
  }
  if (repositories.message) {
	return <div>{repositories.message}</div>
  }

  return (
	  <>
		{repositories.reposList && <div className={"reposList"}>
		  {repositories.reposList.items && repositories.reposList.items.map(el => <a href={el.html_url}>
			<Repo key={uid()} title={el.name} language={el.language}
				  description={el.description}/></a>)}
		</div>}
	  </>
  );
}