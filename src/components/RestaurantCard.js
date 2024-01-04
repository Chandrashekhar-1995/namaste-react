import { CDN_URL } from "../../utils/constants";
  // Buid RestaurantCard Component.
  const RestaurantCard=(props)=>{
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        deliveryTime
    } =resData?.info;

    return(
        <div className="restaurantcard">
            <img alt="res-logo" className="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime} Minuts</h4>
        </div>
    )
};

export default RestaurantCard;