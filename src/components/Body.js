import Shimmer from "../components/Shimmer";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { API } from "../../utils/constants";


// Build a Body Component.
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [textSearch, setTextSearch] = useState("");


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API);
    const json = await data.json();
    setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
    return listOfRestaurant.length===0 ? <Shimmer/> :(
    <div>
      <div className="filter">
        <input type="text" value={textSearch} onChange={(e)=>{
          setTextSearch(e.target.value);
        }}/>
        <button className="Search-btn" onClick={()=>{
          const updatedList = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(textSearch.toLowerCase())
          );
          setFilteredRestaurant(updatedList);
        }}>Search</button>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating>4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-body">
      {filteredRestaurant.map((restaurant) => (
  <RestaurantCard key={restaurant.info.id} resData={restaurant} />
))}
      </div>
    </div>
  );
};

export default Body;
