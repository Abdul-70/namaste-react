// import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";

// const RestaurentsMenu = ()=>{

//     const [resInfo, setResInfo] = useState(null)

//     useEffect(()=>{
//         fetchMenu();
//     }, []);

//     const fetchMenu = async ()=>{
//         const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139&lng=77.2090");

//         const json = await data.json();
//         // console.log(json);
//         setResInfo(json.data);
//         console.log(resInfo?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
//     };

    

//     return resInfo=== null ? ( <Shimmer/>) :(
//         <div>
//             <h1> {resInfo?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info?.name
//             }</h1>
           
            
//             <ul>
//                 <li><h4>burger</h4></li>
//                 <li><h4>Pizza</h4></li>
//                 <li><h4>Chayos</h4></li>
//                 <li><h4>Biryani</h4></li>
//             </ul>
            
//         </div>
//     )
// }

// export default RestaurentsMenu;