import Navbar from "./components/navbar/navbar";
import "./layout.scss";
import HomePage from "./pages/homePage/homePage";
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ListPage from "./pages/listPage/listPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/list",
      element: <ListPage/>,
    },
  ]);
  
  // createRoot(document.getElementById("root")).render(
    
  // );
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
      <RouterProvider router={router} />
      </div>
    </div>
    
  );
}

export default App;
