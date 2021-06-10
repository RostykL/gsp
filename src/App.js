import './App.css';
import Header from "./component/Header/Header";
import SeachBar from "./component/SearchBar/SearchBar";
import ReposList from "./component/Repos/ReposList";

function App() {
  return (
    <div className={"App"}>
      <Header/>
      <div className="appBody">
        <SeachBar/>
        <ReposList/>
      </div>
    </div>
  );
}

export default App;
