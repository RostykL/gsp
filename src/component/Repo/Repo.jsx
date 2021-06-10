export default function Repo({title, language, description}) {
  return (
  	<div className={"repo"}>
	  <div className="title">{title}</div>
	  <div className="language">Languages: {language}</div>
	  <div className="description">Description: {description}</div>
	</div>
  )
}