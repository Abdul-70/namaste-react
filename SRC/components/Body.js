import RestaurentCard from "./RestaurentCard.js";
import resList from "../utils/mockData.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";

const Body = () => {

    const [RetaurentList, setRetaurentList] = useState([]);

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139&lng=77.2090");

         const json = await data.json();
        console.log(json);
        
         setRetaurentList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
)
    }

   if(RetaurentList.length===0){
    return <Shimmer/>
   }

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