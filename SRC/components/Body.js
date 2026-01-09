import RestaurentCard from "./RestaurentCard.js";
import resList from "../utils/mockData.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";

const Body = () => {
  const [RetaurentList, setRetaurentList] = useState([]);
  const [filteredRestaurent, setFilterRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139&lng=77.2090&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    setRetaurentList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return RetaurentList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredList = RetaurentList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRestaurent(filteredList);
              console.log(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = RetaurentList.filter(
              (res) => res.info.avgRating > 4.3
            );

            setFilterRestaurent(filteredList);
          }}
        >
          Top rated restaurent
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurent.map((RESTAURENT) => (
          <RestaurentCard key={RESTAURENT.info.id} resData={RESTAURENT} />
        ))}
      </div>
    </div>
  );
};
export default Body;
