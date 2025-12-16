import RestaurentCard from "./RestaurentCard.js";
import resList from "../utils/mockData.js";
import { useState } from "react";

const Body = () => {

    const [RetaurentList, setRetaurentList] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={ ()=>{
            const filteredList = RetaurentList.filter(
                (res)=> res.info.avgRating > 4.3
            );

            setRetaurentList(filteredList);
        }
        }>Top rated restaurent</button>
      </div>
      <div className="res-container">
        
        {RetaurentList.map((RESTAURENT)=> (
            
            <RestaurentCard key= {RESTAURENT.info.id} resData = {RESTAURENT} />
             
        ))}
       
      </div>
    </div>
  );
};
export default Body;