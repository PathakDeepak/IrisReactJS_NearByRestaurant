import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {saveRestaurant} from '../redux/rest.action';
import "./CityChooseForm.styles.css";

const CityChooseForm = () => {
  //const [restaurant, setRest] = useState([]);
  const [id, setId] = useState();
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState([0, ""]);

  const dispatch = useDispatch();

  useEffect(() => {
    getRestaurants();
  }, [query]);

  const getRestaurants = async () => {
    if (!(query[0] === 0 && query[1] === "")) {
      const response = await fetch(
        `https://developers.zomato.com/api/v2.1/search?entity_id=${query[0]}&entity_type=city&q=${query[1]}&count=10`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "user-key": "2ad63f94902019632381f2df301a60cc",
          },
        }
      );
      const data = await response.json();
      dispatch(saveRestaurant(data.restaurants));
    }
  };

  //custom hook

  const updateID = (e) => {
    setId(e.target.value);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery([id, search]);
  };

  return (
    <div data-testid='cityChooseForm-test'>
      <form className="searchBar" onSubmit={getSearch}>
        <div>
          <select
            id="select_id"
            className="city form-control"
            onChange={updateID}
          >
            <option value="0" hidden>
              Select City
            </option>
            <option value="1">Delhi</option>
            <option value="3">Mumbai</option>
            <option value="4">Bengaluru</option>
            <option value="5">Pune</option>

            <option value="6">Hyderabad</option>
          </select>
          <input
            id="getText"
            type="text"
            className="restaurant"
            placeholder="Search for Restaurant"
            onChange={updateSearch}
          />
          <button id="getMessage" className="search-btn">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default CityChooseForm;
