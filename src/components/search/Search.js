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
    return fetch(
      `${geo_api_url}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };
  // const loadOptions = async (inputValue) => {
  //   try {
  //     const response = await fetch(
  //       `${geo_api_url}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
  //       geoApiOptions
  //     );

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const data = await response.json();

  //     // Assuming the API response data is an array of objects, and each object has an "id" and "name" property
  //     const options = data.map((city) => ({
  //       value: `${city.latitude} ${city.longitude}`, // Use an appropriate property from the API response as the option value
  //       label: `${city.name}, ${city.countryCode}`, // Use an appropriate property from the API response as the option label
  //     }));

  //     return { options }; // Return the options array inside an object with "options" prop
  //   } catch (error) {
  //     console.error(error);
  //     return { options: [] }; // Return an empty array in case of an error
  //   }
  // };
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
