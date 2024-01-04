import Shimmer from "../components/Shimmer";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { API } from "../../utils/constants";


// Build a Body Component.
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API);
    const json = await data.json();
    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

    return listOfRestaurant.length===0 ? <Shimmer/> : (
    <div>
      <div className="search">
        <input className="search-box" />
        <button className="search-btn">Search</button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
            console.log("filter btn");
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-body">
      {listOfRestaurant.map((restaurant) => (
  <RestaurantCard key={restaurant.info.id} resData={restaurant} />
))}

      </div>
    </div>
  );
};

export default Body;
