import resList from "../../utils/mockData"
import RestaurantCard from "./RestaurantCard";

import { useState } from "react";


// Build a Body Component.
const Body=()=>{
    const [listOfRestaurant, setListOfRestaurant] = useState(resList);
    return(
        
        <div>
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listOfRestaurant.filter((res)=>res.info.avgRating>4);
                    setListOfRestaurant(filteredList);
                    console.log("filter btn");
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-body">
                {listOfRestaurant.map((restaurant)=>(<RestaurantCard key={restaurant.info.id} resData={restaurant}/>)) }
            </div>
        </div>
    )
}


export default Body;