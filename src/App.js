import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Detail from "./pages/Detail";
import AddRecipe from "./pages/AddRecipe";
import Profile from "./pages/Profile";
import Maintenance from "./pages/Maintenance";
import React from "react";

// functional component
function App() {
  const maintenance = ["/detail", "/profile", "/register", "/add-recipe"];
  const [isPageMaintenance, setIsPageMaintenance] = React.useState(
    process.env.REACT_APP_IS_MAINTENANCE === "true" &&
      maintenance.find((res) => res === document.location.pathname)
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "detail/:id",
      element: <Detail />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "add-recipe",
      element: <AddRecipe />,
    },
  ]);

  if (isPageMaintenance) {
    return (
      <Maintenance
        maintenanceList={maintenance}
        turnOnMaintenance={() => setIsPageMaintenance(true)}
        turnOffMaintenance={() => setIsPageMaintenance(false)}
      />
    );
  } else {
    // JSX
    return <RouterProvider router={router} />;
  }
}

export default App;
