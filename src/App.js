import Search from "./components/search/Search";
import "./App.css";

function App() {
  const handleOnSearchChange= () =>{
    console.log("data");
  }
  return (
    <div className="App container">
      <Search onSearchChange={handleOnSearchChange}/>
    </div>
  );
}

export default App;
