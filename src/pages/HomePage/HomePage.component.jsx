import React from "react";
import { useSelector } from "react-redux";

import "./HomePage.styles.css";

import Restaurant from "../../components/Restaurant.component";
import CityChooseForm from '../../components/CityChooseForm.component';

const HomePage = () => {
  let restaurant = useSelector((state) => state.saveTheRestaurant);
  if(restaurant.initialState){
    restaurant = restaurant.initialState
  }
  return (
    <div className="homepage" >
      <div className="foodJoint" data-testid='todo-1'>
        <h1>Best Restaurant Near You</h1>
        <CityChooseForm />
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
  );}


export default HomePage;
