import React, { useEffect, useState } from "react";

import "./HomePage.styles.css";

import Restaurant from "../../components/Restaurant.component";

const HomePage = () => {
  const [restaurant, setRest] = useState([]);
  const [id, setId] = useState();
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState([0, ""]);

  useEffect(() => {
    getRestaurants();
  }, [query]);

  const getRestaurants = async () => {
    if (!(query[0] === 0 && query[1] === "")) {
      const response = await fetch(
        `https://developers.zomato.com/api/v2.1/search?entity_id=${query[0]}&entity_type=city&q=${query[1]}&count=100`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "user-key": "2ad63f94902019632381f2df301a60cc",
          },
        }
      );
      const data = await response.json();
      setRest(data.restaurants);
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
    <div className="homepage" >
      <div className="foodJoint" data-testid='todo-1'>
        <h1>Find the best Restaurants in your city</h1>
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

      {restaurant.map((rest) => (
        <Restaurant
          key={rest.restaurant.id}
          name={rest.restaurant.name}
          image={rest.restaurant.thumb}
          locality={rest.restaurant.location.locality}
          address={rest.restaurant.location.address}
          cuisines={rest.restaurant.cuisines}
          cost={rest.restaurant.average_cost_for_two}
          rating={rest.restaurant.user_rating.aggregate_rating}
          votes={rest.restaurant.user_rating.votes}
          rating_color={rest.restaurant.user_rating.rating_obj.bg_color.type}
        />
      ))}
    </div>
  );
};

export default HomePage;
