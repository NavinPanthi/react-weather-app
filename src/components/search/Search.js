import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { geo_api_url, geoApiOptions } from "../../Api";
const Search = ({ onSearchChange }) => {
  const [searchText, setSearchText] = useState(null);
  const handleOnChange = (searchData) => {
    setSearchText(searchData);
    onSearchChange(searchData);
  };
  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(geo_api_url, geoApiOptions);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AsyncPaginate
      placeholder="Search for a city."
      debounceTimeout={600}
      value={searchText}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};
export default Search;
