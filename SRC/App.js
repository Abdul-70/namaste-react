import React from "react";
 import ReactDOM from "react-dom/client";
 import Header from "./components/Header.js";
 import Body from "./components/Body.js";
 import About from "./components/About.js";
 import Contact from "./components/Contact.js";
 import Error from "./components/Error.js";
 import RestaurentsMenu from "./components/RestaurentsMenu.js";
import { createBrowserRouter, Outlet ,RouterProvider } from "react-router-dom";





const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
     errorElement : <Error/>,
    children : [
      {index : true, element : <Body/>,},
      {path : "/about", element : <About/>},
      {path : "/contact", element : <Contact/>},
      {path : "/restaurent/:resID", element : <RestaurentsMenu/>},
    ]
  },
  

])





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


