import {CDN_URL} from "../utils/constants"

const RestaurentCard = ({resData}) => {
// if (!resData || !resData.info) return null;
const {
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    sla,
    costForTwo
} = resData?.info;

  return (
    <div className="res-card">
      <img className="card-logo" src={CDN_URL + cloudinaryImageId} alt="" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minuts</h4>
    </div>
  );
};

export default RestaurentCard;