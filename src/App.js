import Search from "./components/search/Search";
import "./App.css";
import CurrentWeather from "./components/current-weather/CurrentWeather";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="App container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
