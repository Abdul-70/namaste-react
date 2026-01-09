import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurentsMenu = ()=>{

    const [resInfo, setResInfo] = useState(null)

    useEffect(()=>{
        fetchMenu();
    }, []);

    const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=");

        const json = await data.json();
        
        setResInfo(json);
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
        // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info?.name);
        // console.log(resInfo?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    };


    return resInfo=== null ? ( <Shimmer/>) :(
        <div>
            <h1></h1>
           
            
            <ul>
                <li><h4>burger</h4></li>
                <li><h4>Pizza</h4></li>
                <li><h4>Chayos</h4></li>
                <li><h4>Biryani</h4></li>
            </ul>
            
        </div>
    )
}

export default RestaurentsMenu;